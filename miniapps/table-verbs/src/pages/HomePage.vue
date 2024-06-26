<template>
  <div>
    <h2 class="text-center text-xl font-bold mb-4">Тестирование таблички</h2>

    <!-- <div>
      <p>Фильтра: </p>
      <div class="flex flex-wrap gap-2.5 mb-4">
        <Tag
          v-for="tag in tagsList"
          :key="tag.key"
          :value="tag.value"
          :severity="tag.isSelect ? 'success' : 'secondary'"
          class="text-sm"
          @click="selectTag(tag.key)"
        />
      </div>
    </div> -->

    <Card class="mb-6">
      <template #content>
        <div class="flex flex-col gap-2 text-center mb-4">
          <p>Переведите текст:</p>
          <p class="text-xl">
            {{ ruText }}
          </p>
        </div>

        <div class="w-full">
          <InputText
            v-model="enText"
            ref="inputRef"
            placeholder="Ваш текст..."
            autofocus
            class="p-inputtext-lg block"
          />

          <Message
            v-if="statusWord"
            :severity="statusWord"
            :closable="false"
          >
            {{ statusWord === 'success' ? 'Правильно' : `${errorWord}` }}
          </Message>
        </div>
      </template>

      <template #footer>
        <Button
          label="Проверить"
          class="w-full"
          @click="sendWord"
        />
      </template>
    </Card>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive, watch } from 'vue';
import { useFocus } from '@vueuse/core'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Message from 'primevue/message';
// import Tag from 'primevue/tag';

let chunkCounts = 2;
let finishedChunks = +(localStorage.getItem('finished-chunks') || 0);
let currentChunk = finishedChunks + 1;

let timer: any = null;

const inputRef = ref();
const { focused } = useFocus(inputRef, { initialValue: true });

const wordsData = reactive<any[]>([]);
// const filteredWordsData = ref<any[]>([]);

const ruText = ref('');
const enText = ref('');
const statusWord = ref<'success' | 'error' | ''>('');
const errorWord = ref('');

const remaining = ref(+(localStorage.getItem('remaining-words') || 0)); // осталось
const completed = ref(+(localStorage.getItem('completed-words') || 0)); // пройдено
const successful = ref(+(localStorage.getItem('successful-words') || 0)); // успешно
const failed = ref(+(localStorage.getItem('failed-words') || 0)); // провалено

const idsFinishedWord = ref<any[]>(JSON.parse(localStorage.getItem('ids-finished-word') || '[]'));

// const tagsList = reactive<any[]>([]);

// watch([tagsList, wordsData], () => {
//   if (wordsData.length > 0) {
//     const selectedTags = tagsList.filter(tag => tag.isSelect).map(tag => tag.key);
//     const filteredWords = wordsData.filter(word => selectedTags.includes(word.tags[0]) && selectedTags.includes(word.tags[1]));

//     if (filteredWords.length === 0) {
//       filteredWordsData.value = [...filteredWords];
//     }
//   }
// });

watch(focused, () => {
  if (!focused.value) {
    focused.value = true;
  }
});

function cleanString(input: string): string {
  let lowercased = input.toLowerCase();
  let cleaned = lowercased.replace(/[^a-z0-9а-яё]/gi, '');

  return cleaned;
}

function setInitialStatusWord() {
  errorWord.value = '';
  statusWord.value = '';
}

function clearTimerHideMessage() {
  if (timer) {
    setInitialStatusWord();
    clearTimeout(timer);
  }
}

function setLocalStorageStatistics() {
  localStorage.setItem('remaining-words', remaining.value.toString());
  localStorage.setItem('completed-words', completed.value.toString());
  localStorage.setItem('successful-words', successful.value.toString());
  localStorage.setItem('failed-words', failed.value.toString());
}

function addWordToFinished() {
  idsFinishedWord.value.push(wordsData[0].id);
  localStorage.setItem('ids-finished-word', JSON.stringify(idsFinishedWord.value));
}

function compareInputAndCorrectWord() {
  return cleanString(wordsData[0].en) === cleanString(enText.value);
}

function successStatisticIncrement() {
  statusWord.value = 'success';
  remaining.value -= 1;
  completed.value += 1;
  successful.value += 1;
}

function errorStatisticsIncrement() {
  statusWord.value = 'error';
  failed.value += 1;
}

function inputTextInit() {
  wordsData.shift();
  enText.value = '';
}

function loadNewChunk() {
  currentChunk += 1;
  finishedChunks += 1;

  localStorage.setItem('finished-chunks', finishedChunks.toString());

  loadJsonData();
}

function setErrorWord() {
  const failedWord = JSON.parse(JSON.stringify(wordsData[0]));
  errorWord.value = failedWord.en;
}

function sendWord() {
  clearTimerHideMessage();

  if (compareInputAndCorrectWord()) {
    addWordToFinished();
    successStatisticIncrement();
    inputTextInit();

    if (wordsData.length) {
      ruText.value = wordsData[0].ru;
    } else {
      if (currentChunk < chunkCounts) {
        loadNewChunk();
      } else {
        ruText.value = '';
      }
    }
  } else {
    errorStatisticsIncrement();
    setErrorWord();
    inputTextInit();

    wordsData.push(errorWord.value);
    ruText.value = wordsData[0].ru;
  }

  setLocalStorageStatistics();

  timer = setTimeout(() => {
    setInitialStatusWord();
  }, 5000);
}

// function selectTag(key: string) {
//   const tag = tagsList.find(tag => tag.key === key);

//   if (tag) {
//     tag.isSelect = !tag.isSelect;
//   }
// }

const loadJsonData = async () => {
  try {
    if (chunkCounts >= currentChunk) {
      const fileName = `${currentChunk}.data.json`;

      const response = await fetch(`./data/${fileName}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: any[] = await response.json();
      const filteredData = data.filter(item => !idsFinishedWord.value.includes(item.id));
      wordsData.push(...filteredData);

      ruText.value = wordsData[0].ru;
    } else {
      throw new Error('Все чанки закончились');
    }
  } catch (e) {
    console.error("Ошибка загрузки JSON файла:", e);
  }
};

const loadMainData = async () => {
  try {
    const response = await fetch(`./data/main.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: any = await response.json();

    chunkCounts = data.countChunks;
    remaining.value = data.countWords;
    localStorage.setItem('remaining-words', remaining.value.toString());

    // for (let key in data.tags) {
    //   tagsList.push({
    //     key,
    //     value: data.tags[key],
    //     isSelect: true,
    //   });
    // }
  } catch (e) {
    console.error("Ошибка загрузки JSON файла:", e);
  }
}

onMounted(() => {
  loadMainData();
  loadJsonData();
});
</script>

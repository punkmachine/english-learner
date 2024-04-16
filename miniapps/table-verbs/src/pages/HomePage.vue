<template>
  <div>
    <header class="text-center px-2 py-3 text-xl font-bold shadow-lg shadow-gray-800">
      Verb Table
    </header>
    <main class="p-4">
      <h2 class="text-center text-xl font-bold mb-2">Тестирование таблички</h2>

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

      <div>
        <h2 class="text-center text-xl font-bold mb-2">Статистика</h2>

        <div class="grid grid-cols-2 gap-4">
          <Card>
            <template #title>
              Осталось
            </template>
            <template #content>
              <h3>{{ remaining }}</h3>
            </template>
          </Card>
          <Card>
            <template #title>
              Пройдено
            </template>
            <template #content>
              <h3>{{ completed }}</h3>
            </template>
          </Card>
          <Card>
            <template #title>
              Успешно
            </template>
            <template #content>
              <h3>{{ successful }}</h3>
            </template>
          </Card>
          <Card>
            <template #title>
              Провалено
            </template>
            <template #content>
              <h3>{{ failed }}</h3>
            </template>
          </Card>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive, watch } from 'vue';
import { useFocus } from '@vueuse/core'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Message from 'primevue/message';

const chunkCounts = 2;
let finishedChunks = +(localStorage.getItem('finished-chunks') || 0);
let currentChunk = finishedChunks + 1;
let timer: any = null;

const inputRef = ref();
const { focused } = useFocus(inputRef, { initialValue: true });

const wordsData = reactive<any[]>([]);

const ruText = ref('');
const enText = ref('');
const statusWord = ref<'success' | 'error' | ''>('');
const errorWord = ref('');

const remaining = ref(+(localStorage.getItem('remaining-words') || 0)); // осталось
const completed = ref(+(localStorage.getItem('completed-words') || 0)); // пройдено
const successful = ref(+(localStorage.getItem('successful-words') || 0)); // успешно
const failed = ref(+(localStorage.getItem('failed-words') || 0)); // провалено

const idsFinishedWord = ref<any[]>(JSON.parse(localStorage.getItem('ids-finished-word') || '[]'));

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

const loadJsonData = async () => {
  try {
    if (chunkCounts >= currentChunk) {
      const fileName = `${currentChunk.toString().padStart(2, '0')}.data.json`;

      const response = await fetch(`./data/${fileName}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: any[] = await response.json();
      const filteredData = data.filter(item => !idsFinishedWord.value.includes(item.id));
      wordsData.push(...filteredData);

      ruText.value = wordsData[0].ru;
      remaining.value = wordsData.length;
    } else {
      throw new Error('Все чанки закончились');
    }
  } catch (e) {
    console.error("Ошибка загрузки JSON файла:", e);
  }
};

onMounted(() => {
  loadJsonData();
});
</script>

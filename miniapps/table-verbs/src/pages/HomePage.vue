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
              text text text
            </p>
          </div>

          <div class="w-full">
            <InputText v-model="text" placeholder="Ваш текст..." class="p-inputtext-lg block"/>
          </div>
        </template>

        <template #footer>
          <Button label="Проверить" class="w-full" />
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
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Card from 'primevue/card';

const text = ref('');
const remaining = ref(100);
const completed = ref(50);
const successful = ref(45);
const failed = ref(5);
</script>

<style>
/* Стилизация для элементов PrimeVue может быть добавлена здесь или в глобальных стилях */
</style>

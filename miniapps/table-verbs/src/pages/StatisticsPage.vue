<template>
  <div>
    <h2 class="text-center text-xl font-bold mb-2">Статистика</h2>

    <div>
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Card from 'primevue/card';

const remaining = ref(+(localStorage.getItem('remaining-words') || 0)); // осталось
const completed = ref(+(localStorage.getItem('completed-words') || 0)); // пройдено
const successful = ref(+(localStorage.getItem('successful-words') || 0)); // успешно
const failed = ref(+(localStorage.getItem('failed-words') || 0)); // провалено
</script>

<style scoped>

</style>

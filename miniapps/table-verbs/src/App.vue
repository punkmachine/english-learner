<template>
  <div>
    <header class="text-center px-2 py-3 text-xl font-bold shadow-lg shadow-gray-800">
      Verb Table
    </header>

    <main class="p-4">
      <RouterView />
    </main>

    <div class="fixed bottom-0 left-0 right-0 px-2 py-3 bg-gray-900">
      <div class="flex w-full justify-around items-center">
        <RouterLink to="/">
          <div class="flex flex-col items-center">
            <span class="pi pi-home text-2xl"></span>
            <span>Главная</span>
          </div>
        </RouterLink>
        <RouterLink to="/statistics">
          <div class="flex flex-col items-center">
            <span class="pi pi-chart-pie text-2xl"></span>
            <span>Статистика</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped></style>

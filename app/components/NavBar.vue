<script setup lang="ts">
const menuItems = [
  {
    label: 'About me',
    id: '#about',
  },
  {
    label: 'Projects',
    id: '#projects',
  },
  {
    label: 'Resume',
    id: '#resume',
  },
];
</script>

<template>
  <nav class="fixed top-0 w-full h-16 flex justify-center bg-white">
    <ul class="flex gap-x-8">
      <li v-for="(menu, index) in menuItems" :key="index">
        <NuxtLink :to="menu.id" class="h-full flex items-center">
          <Typo variant="text-small">{{ menu.label }}</Typo>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

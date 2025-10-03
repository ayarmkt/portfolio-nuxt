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
  <nav class="sticky top-0 h-16 flex justify-center">
    <ul class="flex gap-x-8">
      <li v-for="(menu, index) in menuItems" :key="index">
        <NuxtLink :to="menu.id" class="h-full flex items-center">
          <Typo variant="text-small">{{ menu.label }}</Typo>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

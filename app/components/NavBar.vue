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
    link: 'test.com',
  },
];
</script>

<template>
  <!-- TODO: remove backdrop at the top of the page. Add backdrop on scroll -->
  <nav
    class="fixed top-0 w-full h-16 flex justify-center bg-white shadow-md backdrop-blur-md"
  >
    <ul class="flex gap-x-10 md:gap-x-16">
      <li v-for="(menu, index) in menuItems" :key="index">
        <NuxtLink
          :to="menu.link || { hash: menu.id }"
          class="h-full flex items-center"
        >
          <Typo variant="text-small">{{ menu.label }}</Typo>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

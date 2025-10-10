<script setup lang="ts">
const menuItems: { label: string; link: string }[] = [
  {
    label: 'About me',
    link: '#about',
  },
  {
    label: 'Projects',
    link: '#projects',
  },
  {
    label: 'Resume',
    link: 'https://test.com',
  },
];
</script>

<template>
  <!-- TODO: remove backdrop at the top of the page. Add backdrop on scroll -->
  <UiNavigationMenu
    class="fixed top-0 !items-stretch w-full !max-w-none h-16 bg-white shadow-md backdrop-blur-m"
  >
    <UiNavigationMenuList class="h-full gap-x-10 md:gap-x-16">
      <UiNavigationMenuItem
        v-for="(menu, index) in menuItems"
        :key="index"
        class="h-full my-auto"
      >
        <UiNavigationMenuLink
          :href="menu.link"
          class="h-full justify-center hover:!bg-transparent"
        >
          <Typo variant="text-small">{{ menu.label }}</Typo>
        </UiNavigationMenuLink>
      </UiNavigationMenuItem>
    </UiNavigationMenuList>
  </UiNavigationMenu>
</template>

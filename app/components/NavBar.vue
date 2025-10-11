<script setup lang="ts">
import { Sun, Moon } from 'lucide-vue-next';

const colorMode = useColorMode();

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

const tag = resolveComponent('UiNavigationMenuLink');

const isDarkMode = computed(() => {
  return (
    colorMode.preference === 'dark' ||
    (colorMode.preference === 'system' && colorMode.value === 'dark') ||
    false
  );
});

function toggleColorState() {
  switch (colorMode.preference) {
    case 'dark':
      colorMode.preference = 'light';
      break;
    case 'light':
      colorMode.preference = 'dark';
      break;
    default:
      colorMode.preference = 'light';
      break;
  }
}
</script>

<template>
  <!-- TODO: remove backdrop at the top of the page. Add backdrop on scroll -->
  <UiNavigationMenu
    class="fixed top-0 !items-stretch w-full !max-w-none h-16 bg-background shadow-md backdrop-blur-m gap-x-5 md:gap-x-0"
  >
    <UiNavigationMenuList class="h-full gap-x-5 md:gap-x-16">
      <UiNavigationMenuItem
        v-for="(menu, index) in menuItems"
        :key="index"
        class="h-full my-auto"
      >
        <Typo
          :tag="tag"
          variant="text-small"
          :href="menu.link"
          class="h-full justify-center hover:!bg-transparent"
        >
          {{ menu.label }}
        </Typo>
      </UiNavigationMenuItem>
    </UiNavigationMenuList>

    <UiToggle
      @click="toggleColorState"
      aria-label="Toggle color mode"
      variant="outline"
      size="lg"
      class="self-center md:absolute md:right-12"
    >
      <Sun v-if="isDarkMode" class="w-4 h-4" />
      <Moon v-else class="w-4 h-4" />
    </UiToggle>
  </UiNavigationMenu>
</template>

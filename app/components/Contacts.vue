<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const links = [
  {
    label: 'GitHub',
    class: 'fa-github',
    url: 'https://github.com/ayarmkt',
  },
  {
    label: 'LinkedIn',
    class: 'fa-linkedin',
    url: 'https://www.linkedin.com/in/aya-t/',
  },
];
</script>

<template>
  <div
    class="md:fixed md:bottom-0 md:left-12 md:flex md:flex-col md:items-center md:gap-y-4"
  >
    <ul class="flex justify-center md:flex-col gap-x-4 gap-y-6">
      <li v-for="(link, index) in links" :key="index">
        <NuxtLink :to="link.url" :aria-label="`Go to ${link.label}`">
          <font-awesome-icon
            :icon="`fa-brands ${link.class}`"
            class="fa-2xl text-muted-foreground"
          />
        </NuxtLink>
      </li>
    </ul>
    <div class="w-0.5 h-40 bg-muted-foreground hidden md:block"></div>
  </div>
</template>

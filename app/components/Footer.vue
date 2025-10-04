<script lang="ts" setup>
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="bg-gray-600 flex flex-col justify-center items-center py-10">
    <Typo tag="p" variant="text-small-white">
      Made with ♥ by Aya Takamura © {{ currentYear }}
    </Typo>
    <Typo tag="p" variant="text-small-white">All Rights Reserved</Typo>
  </footer>
</template>

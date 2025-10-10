<script lang="ts" setup>
const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer
    class="bg-muted-foreground flex flex-col justify-center items-center py-10"
  >
    <Typo tag="p" variant="text-small" class="!text-muted">
      Made with ♥ by Aya Takamura © {{ currentYear }}
    </Typo>
    <Typo tag="p" variant="text-small" class="!text-muted">
      All Rights Reserved
    </Typo>
  </footer>
</template>

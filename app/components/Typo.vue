<script lang="ts" setup>
import type { Component } from 'vue';

const variantClasses = {
  'title-large': 'text-5xl md:text-8xl font-black',
  'title-medium': 'text-3xl md:text-4xl font-black',
  'title-small': 'text-xl font-semibold',
  'text-large': 'text-lg md:text-xl text-muted-foreground',
  'text-large-bold': 'text-lg md:text-xl font-black text-muted-foreground',
  'text-medium': 'text-lg text-muted-foreground',
  'text-small': 'text-sm md:text-base text-muted-foreground',
  'text-xs': 'text-sm text-muted-foreground',
} as const;

const { tag = 'p', variant = 'text-medium' } = defineProps<{
  // Tag name
  tag?: string | Component;
  //   Variant
  variant?: keyof typeof variantClasses;
}>();
</script>

<template>
  <component :is="tag" :class="variantClasses[variant]">
    <slot />
  </component>
</template>

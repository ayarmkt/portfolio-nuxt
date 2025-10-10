<script lang="ts" setup>
import type { Component } from 'vue';

const variantClasses = {
  'title-large': 'text-5xl md:text-8xl font-black',
  'title-medium': 'text-3xl md:text-4xl font-black',
  'title-medium-blue': 'text-3xl md:text-4xl font-black text-blue-700',
  'title-small': 'text-xl font-semibold',
  'text-large': 'text-lg md:text-xl text-gray-600',
  'text-large-bold-blue': 'text-lg md:text-xl font-black text-blue-700',
  'text-medium': 'text-lg text-gray-600',
  'text-small': 'text-sm md:text-base text-gray-600',
  'text-small-white': 'text-sm md:text-base text-white',
  'text-xs': 'text-sm text-gray-600',
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

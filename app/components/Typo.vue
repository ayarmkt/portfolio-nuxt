<script lang="ts" setup>
const variantClasses = {
  'title-large': 'text-5xl md:text-8xl font-black',
  'title-medium': 'text-3xl md:text-4xl font-black',
  'title-small': 'text-xl font-semibold',
  'text-large': 'text-lg md:text-xl text-gray-600',
  'text-medium': 'text-lg text-gray-600',
  'text-small': 'text-sm md:text-base text-gray-600',
  'text-xs': 'text-sm text-gray-600',
} as const;

const { tag = 'p', variant = 'text-medium' } = defineProps<{
  // Tag name
  tag?: string;
  //   Variant
  variant?: keyof typeof variantClasses;
}>();
</script>

<template>
  <component :is="tag" :class="variantClasses[variant]">
    <slot />
  </component>
</template>

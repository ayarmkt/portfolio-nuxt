<script lang="ts" setup>
const variantClasses = {
  title: 'text-5xl md:text-8xl font-black',
  text: 'text-base md:text-xl text-dark-gray',
};

const { tag = 'p', variant = 'text' } = defineProps<{
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

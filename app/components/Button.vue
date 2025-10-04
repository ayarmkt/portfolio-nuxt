<script setup lang="ts">
const {
  label,
  link,
  variant = 'outline',
  size = 'md',
} = defineProps<{
  // Label
  label: string;
  // link
  link?: string;
  //   Variant
  variant?: keyof typeof variantClass;
  //   Size
  size?: 'lg' | 'md';
}>();

const is = computed(() => (!!link ? resolveComponent('NuxtLink') : 'button'));

const variantClass = {
  outline: {
    button: 'border border-gray-600',
    text: '',
  },
  blue: {
    button: 'bg-blue-700',
    text: '!text-white',
  },
};
</script>

<template>
  <component
    :is="is"
    :to="link"
    class="rounded-full text-center"
    :class="[
      variantClass[variant].button,
      {
        'py-1 px-2': size === 'md',
        'py-1 px-8': size === 'lg',
      },
    ]"
  >
    <Typo
      tag="span"
      variant="text-xs"
      class="text-center font-medium"
      :class="variantClass[variant].text"
    >
      {{ label }}
    </Typo>
  </component>
</template>

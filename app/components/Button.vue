<script setup lang="ts">
const {
  label,
  link,
  variant = 'outline',
} = defineProps<{
  // Label
  label: string;
  // link
  link?: string;
  //   Variant
  variant?: keyof typeof variantClass;
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
    class="w-full rounded-full py-1 px-2"
    :class="variantClass[variant].button"
  >
    <Typo
      tag="span"
      variant="text-small"
      class="text-center flex justify-center"
      :class="variantClass[variant].text"
    >
      {{ label }}
    </Typo>
  </component>
</template>

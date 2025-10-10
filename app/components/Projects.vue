<script setup lang="ts">
const projects = [
  {
    title: 'title 1',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expeditasapiente fugit doloribus vero eos ea accusamus iusto dolores nesciunt',
    github: 'test.com',
    demo: 'test.com',
  },
  {
    title: 'title 2',
    text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expeditasapiente fugit doloribus vero eos ea accusamus iusto dolores nesciunt',
    github: 'test.com',
    demo: 'test.com',
  },
];

const titleTag = resolveComponent('UiCardTitle');
const descTag = resolveComponent('UiCardDescription');
</script>

<template>
  <SectionContainer>
    <Typo tag="h2" variant="title-medium" class="pb-8 text-center">
      Projects
    </Typo>
    <ul class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
      <li
        v-for="(project, index) in projects"
        :key="index"
        class="shadow-md rounded-2xl overflow-hidden"
      >
        <UiCard class="pt-0 overflow-hidden">
          <!-- TODO: place correct image -->
          <div class="bg-gray-500 aspect-video"></div>

          <UiCardHeader>
            <Typo :tag="titleTag" variant="title-small" class="text-center">
              {{ project.title }}
            </Typo>
          </UiCardHeader>

          <UiCardContent>
            <Typo :tag="descTag" variant="text-small" class="text-center">
              {{ project.text }}
            </Typo>
          </UiCardContent>

          <UiCardFooter class="justify-center gap-x-2">
            <UiButton as-child>
              <NuxtLink to="project.github">GitHub</NuxtLink>
            </UiButton>
            <UiButton variant="accent" as-child>
              <NuxtLink to="project.demo">Demo</NuxtLink>
            </UiButton>
          </UiCardFooter>
        </UiCard>
      </li>
    </ul>
  </SectionContainer>
</template>

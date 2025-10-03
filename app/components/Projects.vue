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
</script>

<template>
  <section class="py-20 md:py-32 px-6">
    <div class="max-w-4xl mx-auto">
      <Typo tag="h2" variant="title-medium" class="pb-8 text-center">
        Projects
      </Typo>
      <ul class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
        <li
          v-for="(project, index) in projects"
          :key="index"
          class="shadow-md rounded-2xl overflow-hidden"
        >
          <div class="bg-gray-500 aspect-video"></div>
          <div class="px-4 py-6 flex flex-col gap-y-4">
            <Typo tag="h3" variant="title-small" class="text-center">
              {{ project.title }}
            </Typo>
            <Typo tag="p" variant="text-small" class="text-center">
              {{ project.text }}
            </Typo>
            <div class="flex gap-x-2">
              <Button
                label="GitHub"
                :link="project.github"
                variant="outline"
              ></Button>
              <Button label="Demo" :link="project.demo" variant="blue"></Button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

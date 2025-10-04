<script setup lang="ts"></script>

<template>
  <section class="h-screen flex flex-col justify-center items-center">
    <div class="max-w-4xl w-4/5 md:w-2/3 flex flex-col items-center gap-y-4">
      <Typo tag="h1" variant="title-large" class="text-center">
        Aya Takamura
      </Typo>
      <Typo tag="p" variant="text-large" class="text-center">
        <Typo tag="span" variant="text-large" class="!text-blue-700 font-black">
          a Brand Marketer-turned-Front-End Developer
        </Typo>
        who cares about user experience. I am passionate about understanding
        customers' needs and I adopt my user-centric mindset to create
        easy-to-use applications.
      </Typo>
      <Contacts />
      <Button
        label="View my CV"
        link="test.com"
        variant="outline"
        size="lg"
      ></Button>
    </div>
  </section>
</template>

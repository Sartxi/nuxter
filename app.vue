<script setup lang="ts">
const counter = useState('counter', () => Math.round(Math.random() * 1000))
useSeoMeta({
  title: 'Learn',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
const date = useState('date')
await callOnce(async () => {
  date.value = await $fetch('/api/date')
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div>
        Date: {{ date.createdAt.month + 1 }}/{{ date.createdAt.day }}/{{ date.createdAt.year }}
        Counter: {{ counter }}
        <button @click="counter++">
          +
        </button>
        <button @click="counter--">
          -
        </button>
      </div>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

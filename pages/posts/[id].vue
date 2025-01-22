<script setup lang="ts">
const route = useRoute()
definePageMeta({
  validate: async (route) => {
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  }
})
const post = useState('post')
const postData = await $fetch('/api/post', {
  method: 'POST',
  body: { id: route.params.id }
})
post.value = postData.post
</script>


<template>
  <div>
    <h1>{{ post?.title }}</h1>
    <p>{{ post?.description }}</p>
  </div>
</template>

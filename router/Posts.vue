<template>
  <h4>Posts</h4>
  <router-link 
    v-for="post in testPosts"
    :to="`/posts/${post.id}`"
  >
    {{ post.title }}
  </router-link>
  <router-view />
</template>

<script>
import { testPosts } from '../microblog/testPosts.js'

export default {
  setup() {
    return {
      testPosts
    }
  }
}
</script>

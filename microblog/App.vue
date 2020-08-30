<template>
  <div v-for="post in store.state.posts">
    {{ post.title }}
  </div>
</template>

<script>
import { store } from './store'

export default {
  setup() {
    return {
      store
    }
  }
}
</script>

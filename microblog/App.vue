<template>
  <card v-for="post in store.state.posts">
  <template v-slot:title>
    {{ post.title }}
  </template>

  <template v-slot:content>
    {{ post.content }}
  </template>

  <template v-slot:description>
    <controls :post="post" />
  </template>
  </card>
</template>

<script>
import { store } from './store'
import Card from '../pokemon/Card.vue'
import Controls from './Controls.vue'

export default {
  components: {
    Card,
    Controls
  },

  setup() {
    return {
      store
    }
  }
}
</script>

<template>
  <card 
    v-for="post in filteredPosts"
  >
    <template v-slot:title>
      {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <controls 
        :post="post" 
        @setHashtag="setHashtag"
      />
    </template>
  </card>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { store } from './store'
import Card from '../pokemon/Card.vue'
import Controls from './Controls.vue'

export default {
  components: {
    Card,
    Controls
  },

  setup() {
    const currentHashtag = ref()

    const setHashtag = (tag) => {
      currentHashtag.value = tag
    }

    const filteredPosts = computed(() => {
      if (!currentHashtag.value) {
        return store.state.posts
      }

      return store.state.posts.filter(
        post => post.hashtags.includes(currentHashtag.value)
      )
    })

    return {
      filteredPosts,
      setHashtag
    }
  }
}
</script>

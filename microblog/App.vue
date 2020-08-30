<template>
  <input type="text" :value="currentHashtag" @input="setHashtag" />
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
    const setHashtag = (evt) => {
      store.setHashtag(evt.target.value)
    }

    return {
      filteredPosts: store.filteredPosts,
      setHashtag,
      currentHashtag: computed(() => store.state.currentHashtag)
    }
  }
}
</script>

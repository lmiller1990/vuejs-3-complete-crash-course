<template>
  <label for="search">Search Hashtag: #</label>
  <input id="search" type="text" :value="currentHashtag" @input="setHashtag" />
  <div class="cards">
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
  </div>
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

<style>
input {
  height: 30px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid grey;
  outline: none;
}

.cards {
  margin: 10px 0;
  display: flex;
}

.title {
  height: 40px;
}

.content {
  height: 150px;
}
</style>

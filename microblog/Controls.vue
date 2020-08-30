<template>
  <div>
    <button>
      {{ post.likes }}
    </button>
    <hashtag 
      v-for="tag in post.hashtags" 
      :hashtag="tag"
    />
  </div>
</template>

<script>
import Hashtag from './Hashtag.vue'

export default {
  components: { Hashtag },

  props: {
    post: {
      type: Object
    }
  }
}
</script>

<template>
  <div v-if="post">
    <h4>{{ post.title }}</h4>
    <p>
    {{ post.content }}
    </p>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router/dist/vue-router.esm.js'
import { testPosts } from '../microblog/testPosts.js'

export default {
  setup() {
    const route = useRoute()
    console.log(route.params)

    const post = computed(() => {
      return testPosts.find(
        x => x.id === parseInt(route.params.id)
      )
    })

    return {
      post
    }
  }
}
</script>

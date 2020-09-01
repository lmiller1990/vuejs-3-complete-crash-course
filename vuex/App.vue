<template>
  <button 
    v-for="post in posts"
    @click="fetchPostData(post.id)"
  >
    {{ post.title }}
  </button>
    <div v-if="currentPost">
      <h1>{{ currentPost.title }}</h1>
      <p>{{ currentPost.content }}</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { 
          id: 1,
          title: 'Post #1'
        },
        { 
          id: 2,
          title: 'Post #2'
        }
      ]
    }
  },

  computed: {
    currentPost() {
      return this.$store.state.posts.currentPost
    }
  },

  methods: {
    fetchPostData(id) {
      // mutation
      // this.$store.commit('setPostId', id)
      // action
      this.$store.dispatch('posts/fetchDataFromServer', id)
    }
  }
}
</script>

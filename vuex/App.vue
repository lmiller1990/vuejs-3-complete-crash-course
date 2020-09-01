<template>
  <button 
    v-for="post in posts"
    @click="fetchPostData(post.id)"
  >
    {{ post.title }}
  </button>
    Current Post Id: {{ currentPostId }}
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
    currentPostId() {
      return this.$store.state.currentPostId
    }
  },

  methods: {
    fetchPostData(id) {
      // mutation
      // this.$store.commit('setPostId', id)
      // action
      this.$store.dispatch('fetchDataFromServer')
    }
  }
}
</script>

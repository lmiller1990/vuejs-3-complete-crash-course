import { createStore } from 'vuex'
import { testPosts } from '../microblog/testPosts.js'

const delay = () => new Promise(res => 
  setTimeout(res, 1000))

// state
// mutations
// getters
// actions

const posts = {
  namespaced: true,
  state() {
    return {
      currentPost: null
    }
  },

  mutations: {
    setPost(state, post) {
      state.currentPost = post
    }
  },

  actions: {
    async fetchDataFromServer(ctx, id) {
      await delay()
      const post = testPosts.find(post => {
        return post.id === id
      })

      ctx.commit('setPost', post)
    }
  }
}


export const store = createStore({
  modules: {
    posts,
  }
})

// getters
// modules


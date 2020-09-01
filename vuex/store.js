import { createStore } from 'vuex'

const delay = () => new Promise(res => 
  setTimeout(res, 1000))

// state
// mutations
// getters
// actions
export const store = createStore({
  state() {
    return {
      currentPostId: null
    }
  },

  mutations: {
    setPostId(state, id) {
      state.currentPostId = id
    }
  },

  actions: {
    async fetchDataFromServer(context) {
      await delay()
      console.log('LOG')
    }
  }
})


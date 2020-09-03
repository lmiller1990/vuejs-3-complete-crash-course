import { createStore } from 'vuex'
import { albums } from './albums.js'

export const store = createStore({
  modules: {
    albums
  }
})

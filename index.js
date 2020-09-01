import { createApp } from 'vue'
import App from './App.vue'
import PokemonApp from './pokemon/App.vue'
import CompositionApp from './composition/App.vue'
import Microblog from './microblog/App.vue'
import VuexApp from './vuex/App.vue'
import { store } from './vuex/store.js'

const app = createApp(VuexApp)
app.use(store)
app.mount('#app')

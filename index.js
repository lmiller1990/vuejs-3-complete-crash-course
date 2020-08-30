import { createApp } from 'vue'
import App from './App.vue'
import PokemonApp from './pokemon/App.vue'
import CompositionApp from './composition/App.vue'
import Microblog from './microblog/App.vue'
import RouterApp from './router/App.vue'
import { router } from './router/router.js'

const app = createApp(RouterApp)
app.use(router)
app.mount('#app')

import { createApp } from 'vue'
import App from './photos/App.vue'
import { store } from './photos/store.js'
import { router } from './photos/router.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

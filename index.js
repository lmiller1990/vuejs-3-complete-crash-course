import { createApp } from 'vue'
import App from './photos/App.vue'
import { store } from './photos/store.js'

const app = createApp(App)
app.use(store)
app.mount('#app')

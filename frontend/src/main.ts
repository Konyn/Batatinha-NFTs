import './assets/main.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { createPinia } from 'pinia';
// const pinia = createPinia()

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')

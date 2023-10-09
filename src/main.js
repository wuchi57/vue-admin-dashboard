import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import 'styles/index.sass'
import 'virtual:svg-icons-register'
import router from './router'
import store from './store'

createApp(App).use(router).use(store).mount('#app')

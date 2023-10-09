import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import 'styles/index.sass'
import 'virtual:svg-icons-register'
import router from './router'

createApp(App).use(router).mount('#app')

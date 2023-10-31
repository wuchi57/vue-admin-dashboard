import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import '@/styles/index.sass'
import 'virtual:svg-icons-register'
import router from './router'
import store from './store'
import '@/router/permission.js'
import '@/mock'
import SvgIcon from 'components/svg-icon'

const app = createApp(App)

// 全局组件注册
app.component('SvgIcon', SvgIcon)

app.use(router).use(store).mount('#app')

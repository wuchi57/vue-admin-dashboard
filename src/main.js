import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import 'element-plus/dist/index.css'
import '@/styles/index.sass'
import 'virtual:svg-icons-register'
import '@/router/permission.js'
import '@/mock'
import SvgIcon from 'components/svg-icon'
import injectPlugins from '@/plugins/index.js'

const app = createApp(App)

// 全局组件注册
app.component('SvgIcon', SvgIcon)

// 使用注入插件
app.use(injectPlugins)

app.use(router).use(store).mount('#app')

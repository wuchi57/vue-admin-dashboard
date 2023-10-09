import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const store = createPinia()

store.use(
  createPersistedState({
    auto: true,
    key: id => `__vue_admin_${id}`,
  })
)

export default store

export { useAppStore } from './app.js'
export { useSettingStore } from './setting.js'
export { useUserStore } from './user.js'

import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

const store = createPinia()

store.use(
  createPersistedState({
    auto: true,
    key: id => `vue_admin_dashboard_${id}`,
  })
)

export default store

export { useAppStore } from './app.js'
export { useSettingStore } from './setting.js'
export { useUserStore } from './user.js'
export { useTagsViewStore } from './tags-view.js'

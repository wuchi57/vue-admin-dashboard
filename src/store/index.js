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

export { useCounterStore } from './counter.js'

import tabs from './tabs.js'

export default function injectPlugins (app, options) {
  app.config.globalProperties.$tabs = tabs
}

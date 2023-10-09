import { defineStore } from 'pinia'
import defaultSetting from '@/config/settings.js'

const { title, fixedHeader, sidebarLogo } = defaultSetting

const state = {
  title: title,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo
}

export const useSettingStore = defineStore('setting', {
  state: () => state,
  actions: {
    changeSetting({ key, value }) {
      if (state.hasOwnProperty(key)) {
        this[key] = value
      }
    },
  },
})

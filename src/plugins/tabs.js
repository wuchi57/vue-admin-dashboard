import { useTagsViewStore } from '@/store/index.js'
import { useRouter } from 'vue-router'

export default {
  // 关闭页签
  closeTab (obj) {
    return useTagsViewStore().delView(obj)
  }
}

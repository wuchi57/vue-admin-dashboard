import { defineStore } from 'pinia'

export const useTagsViewStore = defineStore('tagsView', {
  state: () => ({
    cachedViews: [], // keep-alive 需要
    visitedViews: [], // tags-view 需要
  }),
  actions: {
    // 添加页签
    addView(view) {
      this.addCachedView(view)
      this.addVisitedView(view)
    },
    // 删除页签
    delView(view) {
      this.delCachedView(view)
      this.delVisitedView(view)
    },
    addCachedView(view) {
      if (this.cachedViews.includes(view.name)) return
      this.cachedViews.push(view.name)
    },
    addVisitedView(view) {
      if (this.visitedViews.some((v) => v.path === view.path)) return
      const { path, fullPath, name } = view
      // 不复制整个route，以防pinia持久存储栈异常告警：Avoid app logic that relies on enumerating keys on a component instance.
      this.visitedViews.push({
        path,
        fullPath,
        name,
        title: view.meta.title || 'no-name',
      })
    },
    delVisitedView(view) {
     for (const [i, v] of this.visitedViews.entries()) {
       if (v.path === view.path) {
         this.visitedViews.splice(i, 1)
         break
       }
     }
    },
    delCachedView(view) {
      const index = this.cachedViews.indexOf(view.name)
      index > -1 && this.cachedViews.splice(index, 1)
    }
  },
})

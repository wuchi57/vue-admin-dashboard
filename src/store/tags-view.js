import { defineStore } from 'pinia'

export const useTagsViewStore = defineStore('tagsView', {
  state: () => ({
    cachedViews: [], // keep-alive 需要
    visitedViews: [], // tags-view 需要
  }),
  actions: {
    addView(view) {
      this.addCachedView(view)
      this.addVisitedView(view)
    },
    addCachedView(view) {
      if (this.cachedViews.includes(view.name)) return
      this.cachedViews.push(view.name)
    },
    addVisitedView(view) {
      if (this.visitedViews.some((v) => v.path === view.path)) return
      const { path, fullpath, name } = view
      // 不复制整个route，以防pinia持久存储栈异常告警：Avoid app logic that relies on enumerating keys on a component instance.
      this.visitedViews.push({
        path,
        fullpath,
        name,
        title: view.meta.title || 'no-name',
      })
    },
  },
})

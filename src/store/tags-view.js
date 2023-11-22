import { defineStore } from 'pinia'

export const useTagsViewStore = defineStore('tagsView', {
  state: () => ({
    cachedViews: [], // keep-alive 需要
    visitedViews: []  // tags-view 需要
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
      if (this.visitedViews.some(v => v.path === view.path)) return
      this.visitedViews.push(
        Object.assign({}, view, {
          title: view.meta.title || 'no-name'
        })
      )
    },
  },
})

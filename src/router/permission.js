import router from './index.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getPageTitle } from 'utils/get-page-title.js'
import { getToken } from 'utils/auth.js'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']
router.beforeEach(async (to, from, next) => {
  NProgress.start()

  document.title = getPageTitle(to.meta.title)

  const hasToken = getToken()

  // 有无 token 判断
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {

    }
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }

})

router.afterEach(() => {
  NProgress.done()
})

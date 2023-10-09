import defaultSetting from '@/config/settings.js'

const title = defaultSetting.title || 'Empty Title'

export function getPageTitle(pageTitle) {
  return pageTitle ? `${pageTitle} - ${title}` : title
}

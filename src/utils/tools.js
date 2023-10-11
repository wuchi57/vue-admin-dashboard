/**
 * 提取 url 中的 query 参数
 * @param url
 * @returns {{}}
 */
export function param2Obj (url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  // 为什么有 +
  if (!search) return {}
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      obj[name] = v.substring(index + 1, v.length)
    }
  })
  return obj
}

/**
 * 校验 svg 路径是否为网络地址
 * @param path
 * @returns {boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

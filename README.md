# Vue Admin Dashboard - 通用管理系统

### 项目地址
https://github.com/wuchi57/vue-admin-dashboard.git

### 初始化项目
```bash
yarn create vite -> yarn
```

### 使用技术栈
vite、vue3、axios、element-plus、eslint、prettier、sass等

### 运行方式
```bash
yarn && yarn dev
```

### yarn timeout 报错
```bash
清除缓存
yarn cache clean && yarn
```

### 安装依赖
```bash
yarn add axios element-ui normalize.css js-cookie nprogress path-to-regexp
yarn add chalk eslint eslint-plugin-vue svg-sprite-loader -D
```

### 搭建流程
- 集成 自动开启浏览器 + 路径别名
- 配置 eslint + prettier
- 集成 Sass 预处理器
- 集成 ElementUIPlus + Icon 自动注入
- 配置 SvgIcon
- 集成 CSS 重置方案
- 自动导入vue、vue-router相关api
- 集成 vue-router
- 集成 pinia 和 持久化存储
- 配置 permission 进行路由拦截

### 路由拦截
- 白名单不拦截，直接放行，如 login 
- 每次跳转设置页面标题，从路由对象的 meta.title 获取
- 如果没有token，但在白名单中，直接跳转，如果没有token，且不再白名单中，跳转login页面携带?redirect=${to.path}
- 如果有token，跳转路径为/login，直接去主页，



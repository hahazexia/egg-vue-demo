# egg-vue-demo

view 层使用 vue，后端使用 egg。生产环境部署时 vue 编译至 `app/public` 下，egg 的 config 中需要配置 view 和 assets，分别对应插件 `egg-view-nunjucks` 和 `egg-view-assets`。
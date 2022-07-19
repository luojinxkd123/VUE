// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 导入vue运行环境
import App from './App' // 构建vue主加载项
import Router from './router/router.js' // 构建路由文件

import ElementUI from 'element-ui' // 构建element
import 'element-ui/lib/theme-chalk/index.css'

// 注册element-ui
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({ // 创建一个vue对象，被index.html加载
  router: Router, // 路由
  components: { App }, // 对象内容
  template: '<App/>', // 模板使用
  el: '#app' // 对象名称
})

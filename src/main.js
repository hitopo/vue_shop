import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标库
import './assets/fonts/iconfont.css'
// 导入全局样式表
import './assets/css/global.css'
// 导入树形插件
import TreeTable from 'vue-table-with-tree-grid'

import axios from 'axios'
// 配置axios请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 设置拦截器，保证之后提交请求的时候自动带上token
axios.interceptors.request.use(config => {
  // 设置请求头添加Authorization属性为token
  config.headers.Authorization = window.sessionStorage.getItem('token')
  //  处理完之后必须"放行"
  return config
})
// 将axios挂载带Vue实例中的$http上
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)

// 创建一个全局的过滤器
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)

  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

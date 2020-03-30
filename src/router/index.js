import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  //  next是一个函数，代表放行与否
  // next() 放行     next('login') 强制跳转到/login

  if (to.path === '/login') {
    // 访问登录界面不拦截
    return next()
  }
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token字符串说明没有登录，强制跳转到登录页面
  if (!tokenStr) {
    return next('/login')
  }
  next()
})

export default router

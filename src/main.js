import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import App from './App.vue'
// import env from './env';
//插件放在上面组件放在下面

//定义 mock 开关
const mock = false
if(mock) {
  //import 是预编译加载 在编译时这个文件就会被加载进来->写入到内存当中
  //require 是执行时才加载 如果 mock 是 false 代码不会被加载 
  require('./mock/api')
}
//根据前端的 跨域方式(cors jsonp 代理) 做调整 /a/b -> api/a/b -> /a/b
axios.defaults.baseURL = '/api'
//axios.defaults.baseURL = 'https://easy-mock.com/mock/5eeddaaa7d4fd8781bbdc3f8/example'
//超时设置
axios.defaults.timeout = 8000
//根据 环境变量 获取不同的请求地址
// axios.defaults.baseURL = env.baseURL

//拦截器 接口错误拦截
axios.interceptors.response.use(function(response) {
  //获取接口返回的值
  let res = response.data
  //hash路由
  let path = location.hash
  //状态码等于 0 表示成功
  if(res.status == 0){
    //我们接口返回的值
    return res.data
    //公司状态码能够按照业务划分 订单异常：2001 订单不存在：2002 订单已过期：2003  核心代码：1001..
    //状态码等于 0 表示未登录
  } else if(res.status == 10){
    if(path != '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
    //其他错误情况
  } else {
    alert(res.msg)
    return Promise.reject(res)
  }
})

//通过vue-axios 挂在 axios
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
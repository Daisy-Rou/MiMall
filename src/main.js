import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
//插件放在上面组件放在下面

//根据前端的 跨域方式(cors jsonp 代理) 做调整 /a/b -> api/a/b -> /a/b
axios.defaults.baseURL = '/api'
//超时设置
axios.defaults.timeout = 8000

//拦截器 接口错误拦截
axios.interceptors.response.use(function(response) {
  //获取接口返回的值
  let res = response.data
  //状态码等于 0 表示成功
  if(res.status === 0){
    //我们接口返回的值
    return res.data
    //公司状态码能够按照业务划分 订单异常：2001 订单不存在：2002 订单已过期：2003  核心代码：1001..
    //状态码等于 0 表示未登录
  } else if(res.status === 10){
    window.location.href = '/#/login'
    //其他错误情况
  } else {
    alert(res.msg)
  }
})

//通过vue-axios 挂在 axios
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

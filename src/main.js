// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前

import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


Vue.use(ElementUI)   //新添加
Vue.config.productionTip = false

const host = process.env.NODE_ENV === 'development' ? '/api' : '' // 根据 process.env.NODE_ENV 的值判断当前是什么环境
const instance = axios.create({
  baseURL: host,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
})
Vue.prototype.$request = instance

import { Notification } from 'element-ui';
instance.interceptors.response.use(data => {
  debugger
      if(data.headers.sessionstatus && data.headers.sessionstatus == 'timeout'){
      router.push({ path: '/login' });
      Notification({
            title: '提示',
            type: 'warning',
            message: "请重新登录！"
      })
    }
  return data
}, error => {
 return Promise.reject(error)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  components: { App },
  methods: {
    ajaxReturn(data, msg, fn){
       /** 
           * 回调函数
           * 
           */
          fn()
      if(data.success){
          this.$notify.success({
              title: '成功',
              type: 'success',
              message: msg + '成功！',
              duration: 1000
          })
         
      }else{
          this.$notify.error({
              title: '错误',
              message: msg + '失败！',
              duration: 1000
          })
      }
    }
  }
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import NewContact from '@/components/NewContact'//新添加，之后在下方的component: NewContact才会生效
import Login from '@/components/Login'
import home from '@/components/home'

import Template from '@/components/template/Template'

import Error404 from '@/components/Error404'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/newcontact',//和router-link to相呼应，导航到/newcontact
      name: 'NewContact',
      component: NewContact
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/404',
      name: 'Error404',
      component: Error404
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  history: true
})
router.beforeEach((to, from, next) => {  
  if (to.matched.length === 0) {     
    from.name ? next({      
      name: from.name    
    }) : next('/errorinfo');   
  } 
  else { 
     next(); //如果匹配到正确跳转  
    }
  });


export default router;

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import homePage from '@/components/homePage'
import course from '@/components/course'
import courseWare from '@/components/courseWare'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'index',redirect: '/homePage',component: index,children:[
    	{path:'/homePage',name: 'homePage',component: homePage},
    	{path:'/course',name: 'course',component: course},
    	{path:'/courseWare',name: 'courseWare',component: courseWare},
    ]},
    
  ]
})

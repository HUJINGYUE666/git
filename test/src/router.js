import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import A from './views/A.vue'
import Test1 from './views/Test1.vue'
import Test2 from './views/Test2.vue'
import B from './views/B.vue'
import C from './views/C.vue'
import D from './views/D.vue'
import Error from './views/Error.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
     {
      path:'/',
      component:Home,
     },
    //  {
    //    path:'/home',
    //    redirect:'/'
    //  },
     {
       path:'/',
       component:Home,
       alias:'/home'
     },
     {
       path:'/a',
       component:A,
       children:[
        {
          path:'/test1',
          component:Test1
        },
        {
          path:'/test2',
          component:Test2
        }
       ]
     },
     {
       path:'/b',
       component:B
     },
    //  {
    //    path:'/c',
    //    name:'c',
    //    component:C
    //  },
     {
       path:'/c/:name',
       redirect:'/d/:name'
     },
     {
       path:'/d/:name',
       component:D
     },
     {
       path:'*',
       component:Error,
       beforeEnter:(to,from,next)=>{
         console.log(to);
         console.log(from);
         console.log(next);
         next();
       }
     }

  ]
})

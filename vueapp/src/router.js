import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Movie from './views/movie.vue'
import Music from './views/music.vue'
import Book from './views/book.vue'
import Photo from './views/photo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/movie',
      component:Movie
    },
    {
      path:'/music',
      component:Music
    },
    {
      path:'/book',
      component:Book
    },
    {
      path:'/photo',
      component:Photo
    },
    

    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

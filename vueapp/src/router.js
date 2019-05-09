import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Movie from './views/movie.vue'
import MovieDetail from './views/movieDetail.vue'
import Music from './views/music.vue'
import MusicList from './views/musicList.vue'
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
      path:'/movieDetail',
      component:MovieDetail
    },
    {
      path:'/music',
      component:Music
    },
    {
      path:"/musicList",
      component:MusicList
    },
    {
      path:'/book',
      component:Book
    },
    {
      path:'/photo',
      component:Photo
    },
    {
      path:"/",
      directives:'/movie'
    }
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

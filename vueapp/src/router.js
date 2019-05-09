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
      redirect:'/movie'
    } 
  ]
})

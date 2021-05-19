import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Cv from '../components/Cv'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'
import Calc from '../components/Calc'

Vue.use(VueRouter);


export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      name: 'Main',
      alias: 'main'
    },
    {
      path: '/cv',
      component: Cv,
      name: 'Cv',
      alias: 'cv'
    },
    {
      path: '/portfolio',
      component: Portfolio,
      name: 'Portfolio',
      alias: 'portfolio'
    },
    {
      path: '/blog',
      component: Blog,
      name: 'Blog',
      alias: 'blog'
    },   
    {
      path: '/calc',
      component: Calc,
      name: 'Calc',
      alias: 'calc' 
    }, 
    {
      path: '/validate_main',
    },

  ],
})
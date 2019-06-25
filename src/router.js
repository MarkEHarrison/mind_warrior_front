import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Signup from './views/Users/Signup.vue';
import Login from "./views/Users/Login.vue";
import Logout from "./views/Users/Logout.vue";
/*User Show */

import MeditationsIndex from "./views/Meditations/Index.vue";



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About 
    },
    { path: '/signup', name: 'signup', component: Signup },
    { path: '/login', name: 'login', component: Login },
    { path: '/logout', name: 'logout', component: Logout },
    {
      path: '/',
      name: 'meditations-index',
      component: MeditationsIndex
    },

  ]
});

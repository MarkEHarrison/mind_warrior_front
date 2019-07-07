import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';

// Users Routes
import Signup from './views/Users/Signup.vue';
import Login from "./views/Users/Login.vue";
import Logout from "./views/Users/Logout.vue";
import UsersShow from './views/Users/Show.vue';
import UsersEdit from './views/Users/Edit.vue';


// Meditation Routes
import MeditationsIndex from "./views/Meditations/Index.vue";

import ArticlesIndex from './views/NewsAPI/Index.vue';

import SpotifyIndex from './views/SpotifyIndex.vue';



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

    /* Users */

    { path: '/signup',
      name: 'signup',
      component: Signup
    },
    { path: '/login',
      name: 'login',
      component: Login
    },
    { path: '/logout',
      name: 'logout',
      component: Logout
    },
    { path: '/users/:id',
      name: 'users-show',
      component: UsersShow
    },
    { path: '/users/:id/edit',
      name: 'users-edit',
      component: UsersEdit
    },

    // Meditations

    {
      path: '/meditations',
      name: 'meditations-index',
      component: MeditationsIndex
    },

    {
      path: '/articles',
      name: 'articles-index',
      component: ArticlesIndex
    },

    {
      path: '/spotify_authorize',
      name: 'spotify-index',
      component: SpotifyIndex
    },



  ]
});

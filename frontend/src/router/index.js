// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
// import Home2 from '../views/Home2.vue';
import Dashboard from '@/views/dashboard/Dashboard.vue';
import Profile from '@/views/dashboard/Profile.vue';
import RequestCards from '@/views/dashboard/DashboardRequests.vue';
import DetailsView from '@/views/dashboard/DashboardDetails.vue';
import Subscription from '@/views/dashboard/Subscription.vue';
import Login from '../views/login/Login.vue';
import Register from '../views/login/Register.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/home2',
  //   name: 'Home2',
  //   component: Home2
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: 'requests',
        component: RequestCards,
      },
      {
        path: 'details',
        component: DetailsView,
      },
      {
        path: 'subscription',
        component: Subscription,
      },
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: '',
        redirect: '/dashboard/requests', 
      },
    ],
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

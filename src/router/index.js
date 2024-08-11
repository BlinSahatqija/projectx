// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '@/views/dashboard/Dashboard.vue';
import RequestCards from '@/views/dashboard/DashboardRequests.vue';
import DetailsView from '@/views/dashboard/DashboardDetails.vue';
import Login from '../views/login/Login.vue';
import Register from '../views/login/Register.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
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
        path: '',
        redirect: 'requests', 
      },
    ],
  },
 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

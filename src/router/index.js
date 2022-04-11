import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/index.vue'
import AboutView from '../views/about-view.vue'
import Jobs from '../views/jobs-view.vue'
import NotFound from '../views/error.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  // catchall
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

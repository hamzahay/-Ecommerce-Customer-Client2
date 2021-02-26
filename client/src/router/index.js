import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainPage from '../components/MainPage'
import Cart from '../components/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/',
        name: 'MainPage',
        component: MainPage
      },
      {
        path: '/carts',
        name: 'Cart',
        component: Cart
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '',
    component: () => import('../views/Auth.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('../components/Login.vue')
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../components/Register.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Login' && localStorage.access_token) {
    next({ name: 'MainPage' })
  } else {
    next()
  }
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/msite',
    component: () => import('../pages/Msite/Msite.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/search',
    component: () => import('../pages/Search/Search.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/order',
    component: () => import('../pages/Order/Order.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/profile',
    component: () => import('../pages/Profile/Profile.vue'),
    meta: {
      showFooter: true
    }
  },
  {
    path: '/login',
    component: () => import('../pages/Login/Login.vue')
  },
  {
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/shop',
    component: () => import('../pages/Shop/Shop.vue'),
    children: [
      {
        path: '/shop/goods',
        component: () => import('../pages/Shop/ShopGoods/ShopGoods.vue')
      },
      {
        path: '/shop/ratings',
        component: () => import('../pages/Shop/ShopRatings/ShopRatings.vue')
      },
      {
        path: '/shop/info',
        component: () => import('../pages/Shop/ShopInfo/ShopInfo.vue')
      },
      {
        path: '',
        redirect: '/shop/goods'
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/one',
        name: "one",
        component: () => import('@/views/one')
    },
    {
        path: '/wzlinde',
        name: "wzlinde",
        component: () => import('@/views/wzlinde')
    },
    {
        path: '/wzlindex1',
        name: "wzlindex1",
        component: () => import('@/views/wzlindex1')
    },
    {
        path: '/site',
        name: 'site',
        component: () => import('@/views/site.vue')
    },
    {
        path: '/details',
        name: 'details',
        component: () => import('@/views/details')
    },
    {
        path: '/action',
        name: 'action',
        component: () => import('@/views/action')
    },
    {
        path: '/one',
        name: "one",
        component: () => import('@/views/one')
    }, {
        path: '/articol',
        name: "articol",
        component: () => import('@/views/articol')
    },
    {
        path: '/sjer',
        name: "sjer",
        component: () => import('@/views/sjer')
    },
    // } 
    //   path: '/one',
    //   name: "one",
    //   component:() => import('@/views/one.vue')
    // }
    {
        path: '/list03',
        name: "list03",
        component: () => import('@/views/list03/list03')
    },
    {
        path: '/thirteen',
        name: "thirteen",
        component: () => import('@/views/thirteen')
    },
    {
        path: '/fourteen',
        name: "fourteen",
        component: () => import('@/views/fourteen')
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
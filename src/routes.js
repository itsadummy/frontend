import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from './views/Homepage.vue'
import Dashboard from './views/Dashboard.vue'
import Advisory from './views/Advisory.vue'
import Recipients from './views/Recipients.vue'
import Alarms from './views/Alarms.vue'
import Tables from './views/Tables.vue'
import Information from './views/Information.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Homepage',
            component: Homepage
        },
        {
            path: '/mdrrmo',
            name: 'Homepage',
            component: Homepage
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/advisory',
            name: 'Advisory',
            component: Advisory
        },
        {
            path: '/recipients',
            name: 'Recipients',
            component: Recipients
        },
        {
            path: '/alarms',
            name: 'Alarms',
            component: Alarms
        },
        {
            path: '/tables',
            name: 'Tables',
            component: Tables
        },
        {
            path: '/information',
            name: 'Information',
            component: Information
        },
    ]
})
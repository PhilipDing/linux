import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search'
import Detail from '@/pages/Result'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'search',
        component: Search
    }, {
        path: '/:command',
        name: 'detail',
        component: Detail
    }]
})

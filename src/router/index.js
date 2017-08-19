import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'search',
        component: (resolve) => require(['@/pages/Search'], resolve)
    }, {
        path: '/:command',
        name: 'detail',
        component: (resolve) => require(['@/pages/Result'], resolve)
    }, {
        path: '/:category/:subcategory',
        name: 'category',
        component: (resolve) => require(['@/pages/Category'], resolve)
    }]
})

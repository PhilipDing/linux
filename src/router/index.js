import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const base = process.env.NODE_ENV === 'production' ? '/linux-command' : '/';

export default new Router({
    base,
    routes: [{
        path: '/',
        name: 'home',
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

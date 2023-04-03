import dashboard from '~/pages/dashboard.vue'
import index from '~/pages/index.vue'

export default [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/dashboard',
        component: dashboard,
        beforeEnter: (to, from, next) => {
            const isAuthenticated = localStorage.getItem('authenticated')
            if (isAuthenticated) {
                next()
            } else {
                next('/index')
            }
        }
    },
    {
        path: '/index',
        component: index
    }
]
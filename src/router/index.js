import Router from 'vue-router'
import Home from '../views/home'
import Login from '../views/login'
export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login
        }
    ]
})
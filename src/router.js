import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Task from './views/Task.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/task',
            name: 'task',
            component: Task
        }
    ]
})
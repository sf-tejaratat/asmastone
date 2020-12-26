import Home from './components/Home'
import About from './components/About'
import Works from './components/Works'
import Work1 from './components/Work1'
import Work2 from './components/Work2'

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/works/',
            component: Works
        }, {
            path: '/work1',
            component: Work1
        }, {
            path: '/work2',
            component: Work2
        }
    ]
}

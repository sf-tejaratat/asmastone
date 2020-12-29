import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import JabanProject from './components/JabanProject'
import YasProject from './components/YasProject'

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
            path: '/projects',
            component: Projects
        }, {
            path: '/jaban-project',
            component: JabanProject
        }, {
            path: '/yas-project',
            component: YasProject
        }
    ]
}

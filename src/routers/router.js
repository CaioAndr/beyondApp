import Vue from 'vue'
import VueRouter from 'vue-router'

    import Home from '../pages/Home.vue'

    import Login from '../pages/Login.vue'
    import Cadastro from '../pages/Cadastro.vue'

    import Biblioteca from '../pages/Biblioteca.vue'
    import Calendario from '../pages/Calendario.vue'
    import TelaDeUsuario from '../pages/TelaDeUsuario.vue'
    import TelaDeCusos from '../pages/TelaDeCusos.vue'
    import TelaDeForum from '../pages/TelaDeForum.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/biblioteca',
        name: 'Biblioteca',
        component: Biblioteca

    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    },

    {
        path: '/cadastro',
        name: 'Cadastro',
        component: Cadastro
    },

    {
        path: '/usuario',
        name: 'Usuário',
        component: TelaDeUsuario
    },

    {
        path: '/cursos',
        name: 'Cursos',
        component: TelaDeCusos
    },

    {
        path: '/calendario',
        name: 'Calendário',
        component: Calendario
    },

    {
        path: '/forum',
        name: 'Fórum',
        component: TelaDeForum
    }
]

const router = new VueRouter({
    routes
})

export default router
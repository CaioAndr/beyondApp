import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../pages/Login.vue'
import Calendario from '../pages/Calendario.vue'
import Cadastro from '../pages/Cadastro.vue'
import TelaDeUsuario from '../pages/TelaDeUsuario.vue'
import TelaDeCusos from '../pages/TelaDeCusos.vue'
import Biblioteca from '../pages/Biblioteca.vue'

Vue.use(VueRouter)

const routes = [
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
        path: '/calendário',
        name: 'Calendário',
        component: Calendario
    }
]

const router = new VueRouter({
    routes
})

export default router
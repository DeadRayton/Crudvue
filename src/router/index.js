import { createRouter, createWebHistory } from 'vue-router';

import UsuariosIndex from '../components/Usuarios-Index.vue';
import Comments from '../components/Comments.vue';

const routes = [
    {
        path: '/',
        component: UsuariosIndex
    },
    {
        path: '/post/:id/comentarios',
        component: Comments
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
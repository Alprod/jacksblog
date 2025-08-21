import { createRouter, createWebHistory } from 'vue-router';
import publicRoute from './routes/publicRoute.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...publicRoute
    ]
});

export default router;
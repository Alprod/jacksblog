import { createRouter, createWebHistory } from 'vue-router';
import publicRoute from './routes/publicRoute.js';
import authRoutes from "@/router/routes/authRoutes.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...publicRoute,
        ...authRoutes,
    ]
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import publicRoute from './routes/publicRoute.js';
import authRoutes from "@/router/routes/authRoutes.js";
import { useFetchCurrentUserStore } from "@/stores/AuthStore.js";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        ...publicRoute,
        ...authRoutes,
    ]
});

router.beforeEach(async (to, from, next) => {
    const isAuth = useFetchCurrentUserStore()
    if(isAuth.isAuthenticated && isAuth.token && isAuth.user == null) {
        try {
           await isAuth.fetchUser();
        }catch (_){}
    }
    next();
})

export default router;
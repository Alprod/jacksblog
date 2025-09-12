import Login from "@/pages/Login.vue";
import { useFetchCurrentUserStore } from "@/stores/AuthStore.js";

export default  [
    {
        path: '/login',
        name: 'Connexion',
        component: Login
    },
    {
        path: '/logout',
        name: 'Deconnexion',
        beforeEnter: async () => {
            const authStore = useFetchCurrentUserStore();
            await authStore.logout();
            return { name: 'Login' }
        }
    }
]
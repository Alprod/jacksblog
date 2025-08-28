import Login from "@/pages/Login.vue";
import { useFetchCurrentUserStore } from "@/stores/AuthStore.js";

export default  [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/logout',
        name: 'Logout',
        beforeEnter: async () => {
            const authStore = useFetchCurrentUserStore();
            await authStore.logout();
            return { name: 'Login' }
        }
    }
]
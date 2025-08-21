import Home from "@/pages/Home.vue";
import Articles from "@/pages/Articles.vue";

export default [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/articles',
        name: 'Articles',
        component: Articles
    }
]
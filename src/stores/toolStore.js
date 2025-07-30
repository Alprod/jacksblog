import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLoadingStore = defineStore('loading',() => {

    const loading = ref(false)

    function $reset() {
        loading.value = false
    }

    return { loading, $reset }
});

export const useApiStore = defineStore('api', () => {
    const apiUrl = ref(import.meta.env.VITE_API_URL || 'http://localhost:5001/leblogapi');

    function $reset() {
        apiUrl.value = import.meta.env.VITE_API_URL || 'http://localhost:5001/leblogapi'
    }

    return { apiUrl, $reset }
});
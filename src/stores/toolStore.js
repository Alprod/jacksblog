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
    const apiUrlImages = ref(import.meta.env.VITE_ASSETS_URL || 'http://localhost:5001/uploads');

    function $reset() {
        apiUrl.value = import.meta.env.VITE_API_URL || 'http://localhost:5001/leblogapi'
        apiUrlImages.value = import.meta.env.VITE_ASSETS_URL || 'http://localhost:5001/uploads';
    }

    return { apiUrl, apiUrlImages, $reset }
});
import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading',() => {

    const loading = ref(false)

    function $reset() {
        loading.value = false
    }

    return { loading, $reset }
});
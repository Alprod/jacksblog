import { ref, onMounted } from 'vue';
import { useLoadingStore } from '@/stores/toolStore';
import { fetchArticles } from '@/services/articleService';

export const useArticles = () => {
    const loadingStore = useLoadingStore();
    const articles = ref([]);
    const error = ref(null);

    onMounted( async () => {
        loadingStore.loading = true;
        try {
            articles.value = await fetchArticles();
        } catch (er) {
            error.value = "Une erreur s'est produite lors du chargement des articles.";
        } finally {
            loadingStore.$reset() // Reset loading state;
        }
    });

    return { articles, loading: loadingStore.loading, error };
}
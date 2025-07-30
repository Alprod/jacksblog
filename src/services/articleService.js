import { useApiStore } from "@/stores/toolStore";

export const fetchArticles = async () => {
    const apiStore = useApiStore();
    const apiUrl = apiStore.apiUrl;

    try {
        const response = await fetch(`${apiUrl}/articles`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch articles:", error);
        throw error;
    }
}
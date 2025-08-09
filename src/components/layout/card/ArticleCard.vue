<script setup>
import { computed, ref } from 'vue';
import { useApiStore } from '@/stores/toolStore';
defineProps({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        default: '',
    },
    coverImage: {
        type: String,
        default: null,
    },
    createdAt: String,
});

const { apiUrlImages } = useApiStore();
const imageCoverUrl = (img) => {
    return img ? `${apiUrlImages}/images/${img}` : null;
};

const formattedDate = (d) => {
    const date = new Date(d);
    return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

</script>
<template>
    <article class="rounded-2xl shadow hover:shadow-lg transition overflow-hidden bg-white dark:bg-gray-300 border border-gray-200 dark:border-gray-800">
        <img 
            v-if="coverImage"
            :src="imageCoverUrl(coverImage)"
            alt="Image de l'article" 
            class="w-full h-48 object-cover" />
        
        <div class="p-4 flex flex-col gap-2">
            <h2 class="text-xl font-bold">{{ title }}</h2>
            <p class="text-gray-600 dark:text-gray-800">{{ content }}</p>
            <div class="flex justify-between items-center text-sm mt-3">
                <time>{{ formattedDate(createdAt) }}</time>
            </div>
        </div>
    </article>
</template>
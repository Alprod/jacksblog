<script setup>
import Button from '@/components/ui/Button.vue';
import { PlusIcon, CheckIcon, XMarkIcon, QuestionMarkCircleIcon, NoSymbolIcon } from '@heroicons/vue/24/outline';
import ArticleCard from '@/components/layout/card/ArticleCard.vue';
import { useArticles } from '@/composables/useArticles';

const { articles, loading, error } = useArticles();
</script>
<template>
    <h1 class="title font-black font-stretch-extra-expanded transition">JackyBlog</h1>
    <div class=" py-2">
        <Button :icon="PlusIcon" label="Ajouter" variant="primary" size="md" />
    </div>
    <p v-if="loading">Chargement...</p>
    <p v-if=" error" class="italic text-red-500 text-xl">{{ error }}</p>
    <div v-if="!articles">Pas d'article pour le moment ...</div>
    <section v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ArticleCard
            v-for="article in articles.data"
            :key="article._id"
            v-bind="article"
        />
    </section>
</template>
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
</template>
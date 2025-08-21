<script setup>
import ArticleCard from '@/components/layout/card/ArticleCard.vue';
import { useArticles } from '@/composables/useArticles';
import { PlusIcon } from "@heroicons/vue/24/outline/index.js";
import Button from "@/components/ui/Button.vue";

const { articles, loading, error } = useArticles();

</script>

<template>
  <div>
    <p>Vous êtes sur : {{ $route.name }}  </p>
    <div class=" py-2">
      <Button :icon="PlusIcon" label="Ajouter un article" variant="primary" size="md" />
    </div>
    <p v-if="loading">Chargement...</p>
    <p v-else-if=" error" class="italic text-red-500 text-xl py-4">{{ error }}</p>
    <p v-else-if="Array.isArray(articles?.data) && articles.data.length === 0" class="py-4 font-black">{{ articles.message }} alors un peut de patience ...</p>
    <section v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <ArticleCard
          v-for="article in articles.data"
          :key="article._id"
          v-bind="article"
          title="article.title"
      />
    </section>
  </div>
</template>

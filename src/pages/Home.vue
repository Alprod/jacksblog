<script setup>
import Button from '../components/ui/Button.vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
</script>
<template>
    <h1 class="text-9xl font-black font-stretch-extra-expanded">JackyBlog</h1>
    <Button :icon="PlusIcon" label="ajouter" variant="primary" size="md" /> 
</template>
<script setup>
import Button from '@/components/ui/Button.vue';
import { PlusIcon } from '@heroicons/vue/24/outline';

</script>
<template>
    <h1 class="title font-black font-stretch-extra-expanded transition">JackyBlog</h1>
    <div class=" py-2">
        <Button :icon="PlusIcon" label="Ajouter" variant="primary" size="md" />
    </div>
</template>
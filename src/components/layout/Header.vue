<script setup>
import ThemeToggle from '../ui/ThemeToggle.vue';

</script>
<template>
    <header class="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md transition-colors">
        <h1 class="text-3xl text-gray-900 dark:text-white font-black font-stretch-extra-expanded">JacksBlog</h1>
        <ThemeToggle />
    </header>       
</template>
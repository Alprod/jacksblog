<script setup>
import { ref, onMounted } from 'vue';
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';

const isDark = ref(false);

onMounted(() => {
    const theme = localStorage.getItem('theme');
    isDark.value = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark.value);
});

function toggleDark() {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value);
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
}
</script>
<template>
    <button @click="toggleDark" class="p-2 rounded transition-colors hover:cursor-pointer">
        <SunIcon v-if="!isDark" class="h-8 w-8 " />
        <MoonIcon v-else class="h-8 w-8 text-gray-300" />
    </button>
</template>
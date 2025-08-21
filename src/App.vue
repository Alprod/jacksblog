<script setup>
import Header from './components/layout/Header.vue';
const date = new Date().getFullYear();

</script>

<template>
  <Header />
  <main class="container mx-auto p-4">
    <router-view />
  </main>
  <footer>
    <p>&copy; {{date}} Jack's Blog</p>
  </footer>
</template>
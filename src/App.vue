<script setup>
import Home from './pages/Home.vue';
const date = new Date().getFullYear();

</script>

<template>
  <header></header>
  
  <main>
    <Home />
  </main>
  <footer>
    <p>&copy; {{date}} Jack's Blog</p>
  </footer>
</template>
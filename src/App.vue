<script setup>
import Header from './components/layout/Header.vue';
import Home from './pages/Home.vue';
const date = new Date().getFullYear();

</script>

<template>
  <Header />
  <main class="container mx-auto p-4">
    <Home />
  </main>
  <footer>
    <p>&copy; {{date}} Jack's Blog</p>
  </footer>
</template>
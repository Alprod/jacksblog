<script setup>
import Header from '@/components/layout/Header.vue';
import Footer from "@/components/layout/Footer.vue";

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="container mx-auto p-4 flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
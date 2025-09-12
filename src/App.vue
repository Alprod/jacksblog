<script setup>
import Header from '@/components/layout/Header.vue';
import Footer from "@/components/layout/Footer.vue";
import ToastContainer from "@/components/ui/ToastContainer.vue";


</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="container relative mx-auto p-4 flex-1">
      <router-view />
      <ToastContainer />
    </main>
    <Footer />
  </div>
</template>
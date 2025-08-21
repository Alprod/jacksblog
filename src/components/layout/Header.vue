<script setup>
import ThemeToggle from '../ui/ThemeToggle.vue';

</script>
<template>
    <header class="items-center p-4 bg-white dark:bg-gray-900 shadow-md shadow-neutral-400 transition-colors">
        <nav>
          <div class="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
              <!-- Logo -->
              <div class="flex items-center">
                <router-link :to="{ name: 'Home' }" class="text-4xl text-gray-900 dark:text-white font-black font-stretch-extra-expanded hover:cursor-pointer">JackyBlog</router-link>
              </div>

              <!-- menu -->
              <div class="hidden md:flex items-center space-x-6">
                <router-link :to="{ name: 'Home' }" class="text-xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:cursor-pointer hover:underline">Accueil</router-link>
                <router-link :to="{ name: 'Articles' }" class="text-xl text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:cursor-pointer hover:underline">Articles</router-link>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </nav>
    </header>
</template>
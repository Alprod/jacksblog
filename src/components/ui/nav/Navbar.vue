<script setup>
import { ref } from 'vue';
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import ThemeToggle from "@/components/ui/ThemeToggle.vue";
import NavItems from "@/components/ui/nav/NavItems.vue";

const isOpen = ref(false);
const routeName = ['Home', 'Articles'];

function closeMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<template>
  <nav>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="items-center">
          <router-link :to="{ name: 'Home' }" class="text-4xl text-gray-900 dark:text-white font-black font-stretch-extra-expanded hover:cursor-pointer">JackyBlog</router-link>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden md:flex space-x-6 items-center">
          <Nav-items :routeName="routeName" class="nav-link" />
        </div>
        <ThemeToggle class="hidden md:flex" />

        <!-- Menu Mobile Toggle -->
        <div class="flex items-center md:hidden">
            <button @click="closeMenu" type="button" aria-label="Toggle menu" class="nav-link focus:outline-none focus:ring-2 focus:ring-gray-500 rounded">
              <Bars3Icon v-if="!isOpen" class="h-8 w-8" aria-hidden="true" />
              <XMarkIcon v-else class="h-8 w-8" aria-hidden="true" />
            </button>
            <ThemeToggle />
        </div>
      </div>
    </div>

    <!-- Menu Mobile -->
    <div v-if="isOpen" class="md:hidden px-4 pt-2 pb-4 space-y-1 transition">
      <nav-items :routeName="routeName" @isOpen="closeMenu" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100" />
    </div>
  </nav>

</template>

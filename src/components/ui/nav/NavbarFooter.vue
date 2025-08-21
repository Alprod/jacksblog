<script setup>
import NavItems from "@/components/ui/nav/NavItems.vue";

const year = new Date().getFullYear()
const appName = import.meta.env.VITE_BLOG_NAME || 'MonBlog'

const routeName = ['Home', 'Articles'];
</script>

<template>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid gap-6 md:grid-cols-3 items-start">
          <!-- Brand -->
          <div>
            <router-link :to="{name: 'Home'}" class="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {{ appName }}
            </router-link>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Partages d’articles, tips & dev life.
            </p>
          </div>

          <!-- Nav -->
          <nav class="grid grid-cols-2 gap-2 text-sm">
            <nav-items :routeName="routeName" class="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200" />
          </nav>

          <!-- Socials -->
          <div class="flex md:justify-end gap-4">
            <a class="p-2 rounded-lg border border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
               href="https://twitter.com" target="_blank" rel="noopener">
              <!-- X/Twitter -->
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a class="p-2 rounded-lg border border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
               href="https://github.com" target="_blank" rel="noopener">
              <!-- GitHub -->
              <i class="fa-brands fa-github"></i>
            </a>
            <a class="p-2 rounded-lg border border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
               href="mailto:contact@tonblog.com">
              <!-- Mail -->
              <i class="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>

        <div class="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p class="text-xs text-gray-500 dark:text-gray-400">
            © {{ year }} {{ appName }}. Tous droits réservés.
          </p>
          <div class="flex gap-4 text-xs">
            <router-link to="/legal" class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
              Mentions légales
            </router-link>
            <router-link to="/privacy" class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
              Confidentialité
            </router-link>
            <router-link to="/rss" class="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">
              RSS
            </router-link>
          </div>
        </div>
      </div>
  </template>

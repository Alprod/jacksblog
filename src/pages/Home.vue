<script setup>
import Button from '@/components/ui/Button.vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import { useCurrentUser } from "@/composables/useCurrentUser.js";

const { user } = useCurrentUser()


</script>
<template>
    <h1 class="title font-black font-stretch-extra-expanded transition">JackyBlog</h1>
    <div class=" py-2">
      <p class="text-2xl text-center p-9 m-9">Bienvenue {{ user.username }} </p>
        <Button :icon="PlusIcon" label="Ajouter" variant="primary" size="md" />
    </div>
</template>
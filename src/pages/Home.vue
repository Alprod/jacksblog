<script setup>
import Button from '@/components/ui/Button.vue';
import { PlusIcon } from '@heroicons/vue/24/outline';
import { useFetchCurrentUserStore } from "@/stores/AuthStore.js";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const userCurrent = useFetchCurrentUserStore();
const { user } = storeToRefs(userCurrent);
onMounted(async () => {
  const userCu = await userCurrent.fetchUser();
  console.log(userCu.username);
  console.log(user.value);
})
</script>
<template>
    <h1 class="title font-black font-stretch-extra-expanded transition">JackyBlog</h1>
    <div class=" py-2">
        <Button :icon="PlusIcon" label="Ajouter" variant="primary" size="md" />
    </div>
</template>
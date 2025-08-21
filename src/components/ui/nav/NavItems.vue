<script setup>
defineProps({ routeName: Array })
defineEmits(['isOpen'])
</script>

<template>
  <div v-for="name in routeName" :key="name">
    <router-link @click="$emit('isOpen')" :to="{name: name}" :class="$attrs.class">{{ name }}</router-link>
  </div>
</template>

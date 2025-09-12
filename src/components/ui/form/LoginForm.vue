<script setup>
import { CheckBadgeIcon} from "@heroicons/vue/16/solid/index.js";
import { ref } from "vue";

const password = defineModel("password");
const email = defineModel("email");
const message = ref(null);
const emailElement = () => {
  const regExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regExp.test(email.value)) {
    message.value = "Merci, votre email est valide";
  }else {
    message.value = null;
  }
  return message.value;
}
</script>

<template>
  <!-- Email -->
  <div>
    <label class="block text-sm font-medium text-white mb-1">Email</label>
    <input
        v-model="email"
        type="email"
        class="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
        placeholder="ex: user@mail.com"
    />
  </div>
  <div class="flex items-center justify-between" v-if="emailElement()">
    <p class="text-white">{{ emailElement() }}</p>
    <CheckBadgeIcon class="h-5 w-5 text-green-500"/>
  </div>

  <!-- Password -->
  <div>
    <label class="block text-sm font-medium text-white mb-1">Mot de passe</label>
    <input
        v-model="password"
        type="password"
        class="w-full px-4 py-2 rounded-lg bg-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
        placeholder="••••••••"
    />
  </div>
</template>

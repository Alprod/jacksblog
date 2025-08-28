<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import Button from "@/components/ui/Button.vue";
import { useFetchCurrentUserStore } from "@/stores/AuthStore.js";
import { useApiStore } from "@/stores/toolStore.js";
import { fetchJson } from "@/helpers/api.js";

const email = ref('')
const password = ref('')
const error = ref(null)
const fetchUserCurrentStore = useFetchCurrentUserStore();
const apiStore = useApiStore();
const router = useRouter();

async function handleLogin() {
  error.value = null;
  const url = `${apiStore.apiUrl}/auth/login`;

  if(!email.value || !password.value) {
    error.value = 'Veuillez remplir tous les champs'
    return;
  }

  try {
    const resp = await fetchJson(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email.value, password: password.value })
    })

    const token = resp?.data?.token ?? resp?.token;
    if(!token) {
      error.value = 'Une erreur s’est produite: jeton manquant';
    }
    fetchUserCurrentStore.setToken(token);
    const userCurrent = await fetchUserCurrentStore.fetchUser();
    const path = fetchUserCurrentStore.setRole(userCurrent.role);
    await router.push({ name: path });


  }catch ( err ) {
    error.value = 'Une erreur s’est produite lors de la connexion';
  }
}
</script>

<template>
  <div class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-800 to-purple-900 dark:from-gray-800 dark:via-gray-900 dark:to-black overflow-hidden rounded-xl">


    <!-- Carte Login -->
    <div class="relative z-10 w-full max-w-md bg-white/20 backdrop-blur-xl rounded-2xl shadow-xl p-8">
      <h1 class="text-3xl font-extrabold text-white text-center mb-6">Connexion</h1>

      <!-- Message d’erreur -->
      <p v-if="error" class="text-red-300 text-center mb-4">{{ error }}</p>

      <!-- Formulaire -->
      <form @submit.prevent="handleLogin" class="space-y-5" novalidate>
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

        <!-- Bouton login -->
        <div>
          <Button label="Se connecter" variant="primary" size="md" class="w-full" />
        </div>

      </form>

      <!-- Liens -->
      <p class="mt-6 text-center text-sm text-gray-200">
        Pas encore de compte ?
        <router-link to="/register" class="text-pink-300 hover:underline">Inscris-toi</router-link>
      </p>
    </div>
  </div>
</template>

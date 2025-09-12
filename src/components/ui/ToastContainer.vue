<script setup>
import { CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";
import { useToastStore } from "@/stores/toastStore.js";
import { storeToRefs } from "pinia";

const toastStore = useToastStore();
const { toasts } = storeToRefs(toastStore);
const baseClass = "w-96 p-4 rounded-md shadow-lg transition-discrete ease-in-out";

const variantClass = (variant) => {
  switch(variant) {
    case 'success':
      return 'success-notification'
    case 'error':
      return 'error-notification'
    case 'warning':
      return 'warning-notification'
    case 'info':
      return 'info-notification'
    default:
      return 'success-notification'
  }
}

const icon = (variant) => {
  switch(variant) {
    case 'success':
      return CheckCircleIcon
    case 'error':
      return XCircleIcon
    case 'warning':
      return ExclamationTriangleIcon
    case 'info':
      return InformationCircleIcon
    default:
      return CheckCircleIcon
  }
}

</script>

<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-[9999] flex flex-col gap-3 pointer-events-none">
      <TransitionGroup
          tag="div"
          name="toast-list"
          enter-active-class="transform transition duration-300 ease-out"
          enter-from-class="translate-x-full opacity-0"
          enter-to-class="translate-x-0 opacity-100"
          leave-active-class="transform transition duration-200 ease-in"
          leave-from-class="translate-x-0 opacity-100"
          leave-to-class="translate-x-full opacity-0"
      >
        <div
            v-for="t in toasts"
            :key="t.id"
            class="fixed top-24 right-2 z-50"
            role="status"
            aria-live="polite"
        >
          <div :class="[baseClass, variantClass(t.variant)]">
            <div class="flex items-start gap-3">
              <div class="flex-shrink-0">
                <component
                    :is="icon(t.variant)"
                    class="h-4 w-4"
                    :class="{
                      'text-green-600': t.variant === 'success',
                      'text-red-600': t.variant === 'error',
                      'text-yellow-600': t.variant === 'warning',
                      'text-blue-600': t.variant === 'info',
                    }"
                    aria-hidden="true"
                />
              </div>
              <div class="flex-1">
                <h3 class="text-sm font-medium ">{{ t.title }}</h3>
                <p class="mt-2">{{ t.message }}</p>
              </div>
              <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md p-1 text-current/70 hover:text-current hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-current/30"
                  aria-label="Fermer la notification"
                  @click="toastStore.remove(t.id)"
              >
                <XCircleIcon class="h-4 w-4 block relative" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

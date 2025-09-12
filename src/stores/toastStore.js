import { defineStore } from 'pinia';
import { ref } from "vue";

let idSequence = 0;
export const useToastStore = defineStore('toast', () => {

    const toasts = ref([]);


        function push({title, message, variant = 'success', duration = 5000}) {
            const id = ++idSequence;
            const toast = { id, title, message, variant, duration, timeoutId: null };
            toasts.value.unshift(toast);

            if (duration && duration > 0) {
                toast.timeoutId = setTimeout(() => { remove(id)}, duration)
            }
            return id;
        }
        function remove(id) {
            const idx = toasts.value.findIndex((t) => t.id === id);
            if (idx !== -1) {
                const t = toasts.value[idx];
                if(t.timeoutId) clearTimeout(t.timeoutId);
                toasts.value.splice(idx, 1);
            }
        }
        function success(message, opts = {}) {
            return push({title:opts.title ?? "Succès", message, variant: 'success', duration: opts.duration ?? 5000});
        }
        function error(message, opts = {}) {
            return push({title:opts.title ?? "Erreur", message, variant: 'error', duration: opts.duration ?? 5000});
        }
        function warning(message, opts = {}) {
            return push({title:opts.title ?? "Attention", message, variant: 'warning', duration: opts.duration ?? 5000});
        }
        function info(message, opts = {}) {
            return push({title:opts.title ?? "Information", message, variant: 'info', duration: opts.duration ?? 5000});
        }
        function $reset() {
            toasts.value.forEach(t => t.timeoutId && clearTimeout(t.timeoutId));
            toasts.value = [];
        }
        return { toasts, push, remove, success, error, warning, info, $reset };
});
import { storeToRefs } from 'pinia';
import { useFetchCurrentUserStore } from "@/stores/AuthStore.js";

let iniPromise = null;

export function useCurrentUser(){
    const userStore = useFetchCurrentUserStore();
    const { user } = storeToRefs(userStore);
    if(!iniPromise && userStore.token && !userStore.user) {
        iniPromise = userStore.fetchUser().finally(() => {
            iniPromise = null;
        });
    }
    return { user, fetchUser: userStore.fetchUser() };
}
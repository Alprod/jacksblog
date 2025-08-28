import { defineStore } from "pinia";
import { useApiStore } from "./toolStore.js";
import { fetchJson, normalizeUserResponse } from "@/helpers/api.js";

export const useFetchCurrentUserStore = defineStore( "auth", {
    state: () => ({
        token: sessionStorage.getItem( 'token' ) || null,
        user: null,
        role: null,
    }),
    getters: {
        isAuthenticated: ( state ) => !!state.token,
    },
    actions: {
        async fetchUser() {
            const apiStore = useApiStore();
            if ( !this.token ) return null;
            const url = `${ apiStore.apiUrl }/auth/me`;
            const data = await fetchJson( url, {
                headers: {
                    Authorization: `Bearer ${ this.token }`,
                },
            } ).catch( () => null );
            const user = normalizeUserResponse( data );
            this.user = user || null;
            return this.user;
        },
        setToken( token ) {
            this.token = token || null;
            if ( token ) sessionStorage.setItem( 'token', token );
            else sessionStorage.removeItem( 'token' );
        },
        setRole( role ) {
            this.role = role;
            switch ( role ) {
                case 'ROLE_ADMIN':
                    return 'Admin';
                case 'ROLE_AUTHOR':
                   return 'Author';
                default:
                    return 'Home';
            }
        },
        async logout() {
            const token = this.token || sessionStorage.getItem( 'token' );
            try {
                if ( token ) {
                    const apiStore = useApiStore();
                    const url = `${ apiStore.apiUrl }/auth/logout`;
                    await fetchJson( url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${ token }`,
                        },
                    } )
                }

            }catch ( e ) {
                console.error( e );
            }finally {
                sessionStorage.removeItem( 'token' );
                this.user = null;
                this.token = null;
            }
        },
    }
} );
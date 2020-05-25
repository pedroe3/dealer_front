<template>
    <div class="sidebar">
        <div v-if="isAuthenticated">
            <div class="sidebar__content">
                <router-link to="/">Home</router-link>
            </div>
            <div class="sidebar__content">
                <router-link to="/customer">Customer</router-link>
            </div>
            <div class="sidebar__content">
                <router-link to="/user">User</router-link>
            </div>
            <div class="sidebar__content">
                <router-link to="/dashboard">Dashboard</router-link>
            </div>
            <div class="sidebar__content">
                <router-link to="/inventory">Inventory</router-link>
            </div>
            <div class="sidebar__content">
                <router-link to="/sales">Sales</router-link>
            </div>
            <div class="sidebar__content">
                <router-link to="/reports">Reports</router-link>
            </div>
            <div class="sidebar__content" v-if="isSuperAdmin">
                <router-link to="/admin">Administration</router-link>
            </div>
            <div class="sidebar__content">
                <button @click.prevent="signOutAction">Sign Out</button>
            </div>
            <div class="sidebar__content">
                {{ userInfo }}
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import router from "../../router";
    export default {
        props: {
        },
        computed: {
            ...mapGetters({
                isAuthenticated: 'auth/isAuthenticated',
                userInfo: 'auth/userMe',
                isSuperAdmin: 'auth/isSuperAdmin'
            })

        },
        methods: {
            ...mapActions({
                signOut: 'auth/signOut'
            }),
            signOutAction () {
                this.signOut().then(() => {
                    router.replace({
                        name: 'LoginView'
                    })
                })
            }
        }
    };
</script>

<style lang="scss" scoped>
.sidebar {
    background-color: #f9f9f9;
    flex: 1;
    height: 100%;
    min-width: 10%;
    border-right: 2px solid #eee;

    &__content {
        padding: 30px;
        a {
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>

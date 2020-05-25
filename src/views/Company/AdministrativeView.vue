<template>
    <div>
        <div>
            ADMINISTRATION
            <button class="button" @click.prevent="addCompany">Add</button>
        </div>
        <div>
            <realm-table></realm-table>
        </div>
    </div>
</template>

<script>

    import SuperAdmin from "../../router/middleware/SuperAdmin";
    import auth from "../../router/middleware/auth";
    import ClearRealmState from "../../router/middleware/ClearRealmState";
   import RealmTable from "../../components/RealmTable/RealmTable";

    export default {
        name: 'AdministrativeView',
        components: {
          RealmTable
        },
        middleware: [
            auth,
            SuperAdmin,
            ClearRealmState
        ],
        props: {
        },
        watch: {
        },
        computed: {
        },
        methods: {
            addCompany() {
                this.$router.push("/company/add")
            }
        },
    };
</script>
<style scoped>
    .button {
        background-color: #0070c0;
        border: none;
        color: white;
        padding: 7px 27px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
</style>

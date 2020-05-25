<template>
    <div class="UserView">
        User View
        <div id = "userTable">
            <user-data-table></user-data-table>
        </div>

    </div>
</template>

<script>
    import UserDataTable from "../components/UserDataTable/UserDataTable";
    import auth from "../router/middleware/auth";
    export default {
        middleware: [
            auth
        ],
        name: 'userView',
        components: {UserDataTable},
        props: {
        }

    }
</script>

<style >
    #userTable {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>



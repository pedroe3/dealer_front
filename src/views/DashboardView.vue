<template>
    <div class="DashboardView">
     Dashboard
    </div>
</template>

<script>
    import auth from "../router/middleware/auth";

    export default {
        middleware: [
            auth
        ],
        name: 'dashboard',
        props: {
        },
    };
</script>

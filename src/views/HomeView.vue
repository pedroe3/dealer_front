<template>
    <div class="HomeView">
        HOME
    </div>
</template>

<script>
    import auth from "../router/middleware/auth";
    export default {
        middleware: [
            auth
        ],
        name: 'HomeView',
        props: {
        },
    };
</script>

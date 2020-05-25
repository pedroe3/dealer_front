<template>
    <div class="ReportsView">
        <pre v-text="$attrs"/>
    </div>
</template>

<script>
    import auth from "../router/middleware/auth";

    export default {
        middleware: [
            auth
        ],
        props: {
        },
    };
</script>

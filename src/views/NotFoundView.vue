<template>
    <div>
        Not Found
    </div>
</template>

<script>
    import NotFoundAuthenticated from "../router/middleware/NotFoundAuthenticated";
    import NotFoundNotAuthenticated from "../router/middleware/NotFoundNotAuthenticated";

    export default {
        middleware: [
            NotFoundAuthenticated,
            NotFoundNotAuthenticated
        ],
        props: {
        },
    };
</script>

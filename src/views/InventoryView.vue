<template>
    <div class="InventoryView">
        Inventory
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

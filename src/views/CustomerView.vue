<template>
  <div class="home">
    Customer
  </div>
</template>

<script>
// @ is an alias to /src
import auth from "../router/middleware/auth";

export default {
  middleware: [
    auth
  ],
  name: 'customerView',
  components: {

  }
}
</script>

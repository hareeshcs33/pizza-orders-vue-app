<template>
  <div class="home">
    <h1 class="list-title">Pizza Order list</h1>
    <order :ordersList="ordersList"></order>
  </div>
</template>
<script>
import Order from "./order";
import orderMixin from "../mixins/order";

export default {
  components: {
    Order
  },
  mixins: [orderMixin]
};
</script>
<style scoped>
.list-title {
  text-align: center;
}
</style>

<template>
  <div>
    <stock v-for="stock in getStocks" :key="stock.id" :stock="stock"></stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    Stock
  },
  computed: {
    getStocks() {
      return this.$store.getters.getStocks;
    }
  }
};
</script>

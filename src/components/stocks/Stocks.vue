<template>
  <div>
    <stock v-for="stock in stocks" :key="stock.id" :stock="stock"></stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  data() {
    return {
      stocks: [
        { id: 1, name: "Microsoft", price: 110 },
        { id: 2, name: "Google", price: 213 },
        { id: 3, name: "Amazon", price: 65 },
        { id: 4, name: "Facebook", price: 126 }
      ]
    };
  },
  components: {
    Stock
  }
};
</script>

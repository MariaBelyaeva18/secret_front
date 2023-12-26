<template>
  <a>Your Message:</a>

</template>

<script>
import { useStore } from '@/store/actions.js';

export default {
  data() {
    return {
      store: useStore(),
    };
  },

  methods: {
    async loadData() {
      await this.store.getMessage();
    },
  },

  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>

</style>

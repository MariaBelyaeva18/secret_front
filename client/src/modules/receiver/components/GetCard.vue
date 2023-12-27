<template>
  <section class="text">
    <b>Your Message: </b>

    <div>
      <span>{{this.store.text.message}}</span>
    </div>

    <div class="button">
      <router-link to="/"><v-btn>New message</v-btn></router-link>
    </div>
  </section>

</template>

<script>
import { useStore } from '@/store/actions.js';

export default {
  data() {
    return {
      store: useStore(),
      text: '',
    };
  },
  mounted() {
    this.store.currentPath = window.location.pathname;
    this.store.getMessage();
  },
};
</script>

<style scoped>
.text {
  margin-left: 50px;
  font-size: 15pt;
  font-family: "JetBrains Mono", sans-serif;
}

.button {
  margin-top: 20px;
}
</style>

<template>
  <v-textarea
    class="area"
    label="Put your message here"
  >
  </v-textarea>

  <v-btn
    class="send_button"
    @click="this.showLink()"
  >
    Send
  </v-btn>

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
    async showLink() {
      console.log(`http://localhost:5173/${this.generateRandomString()}`);
    },

    generateRandomString() {
      const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    },
  },
};

</script>

<style scoped>
.area {
  margin: 0 50px;
}
.send_button {
  margin-left: 50px;
  background-color: rgba(95, 158, 160, 0.57);
}
</style>

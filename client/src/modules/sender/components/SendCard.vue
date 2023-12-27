<template>
  <v-textarea
    class="area"
    label="Put your message here"
    :value="store.messages.text"
    :rules="rules"
    @update:modelValue="store.messages.text = $event"
  >
  </v-textarea>

  <v-btn
    class="send_button"
    @click="this.showLink()"
  >
    Send
  </v-btn>
  <div style="margin-left: 50px; margin-top: 30px; font-size: 15pt">
    <span> Link: </span>
    <router-link :to="`/get/${store.messages.mesLink}`">{{store.messageLink}}</router-link>
  </div>
</template>

<script>

import { useStore } from '@/store/actions.js';

export default {
  data() {
    return {
      store: useStore(),
      rules: [
        (value) => {
          if (value) return true;
          return "Can't be empty.";
        },
      ],
    };
  },
  methods: {
    async showLink() {
      this.store.messages.mesLink = this.generateRandomString();
      this.store.messageLink = `http://localhost:5173/get/${this.store.messages.mesLink}`;
      console.log(this.store.messageLink);
    },

    generateRandomString() {
      const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      for (let i = 0; i < 8; i += 1) {
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

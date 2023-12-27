<template>

    <v-textarea
      class="area"
      label="Put your message here"
      :model-value="store.messages.message"
      :rules="rules"
      @input="store.messages.message = $event.target.value"
      ref="form"
    >
    </v-textarea>

    <v-btn
      class="send_button"
      @click.stop="this.showLink()"
    >Send</v-btn>
    <v-btn
      class="reset_button"
      @click="this.reset()"
    >reset</v-btn>

    <div style="margin-left: 50px; margin-top: 30px; font-size: 15pt">
      <span> Link: </span>
      <span>{{this.store.err}}</span>
      <router-link
        ref="messageLinkRef"
        :to="`/${store.messages.route}`"
      >{{store.messageLink}}</router-link>
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
      if (this.store.messages.message !== '') {
        this.store.messages.route = this.generateRandomString();
        this.store.messageLink = `${window.location}${this.store.messages.route}`;
        this.store.err = '';
        await this.store.sendMessage();
      } else {
        this.store.messageLink = '';
        this.store.messages.route = '';
        this.store.err = 'Nothing to send';
      }
    },

    generateRandomString() {
      const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      for (let i = 0; i < 8; i += 1) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    },

    reset() {
      this.$refs.form.reset();
      this.store.messages = {
        message: '',
        route: '',
      };
      this.store.messageLink = '';
      this.store.err = '';
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
.reset_button {
  margin-left: 20px;
  background-color: rgba(255, 136, 136, 0.57);
}
</style>

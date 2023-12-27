import { defineStore } from 'pinia';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const useStore = defineStore('uStore', {
  state: () => ({
    messages: {
      text: '',
      mesLink: '',
    },
    messageLink: null,
  }),

  actions: {
    async sendMessage() {
      const data = await axios.post(`${apiUrl}/message`);
      this.messages = data.data;
    },

    async getMessage() {
      // const data = await axios.get(`${apiUrl}/get/${this.messages.link}`);
      return this.messages.text;
    },
  },
});

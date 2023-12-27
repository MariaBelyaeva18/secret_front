import { defineStore } from 'pinia';
import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const useStore = defineStore('uStore', {
  state: () => ({
    messages: {
      message: '',
      route: '',
    },
    text: {
      message: '',
    },
    currentPath: '',
    messageLink: null,
    err: '',
  }),

  actions: {
    async sendMessage() {
      await axios.post(`${apiUrl}/message`, this.messages);
    },

    async getMessage() {
      const data = await axios.get(`${apiUrl}${this.currentPath}`);
      this.text.message = data.data;
    },
  },
});

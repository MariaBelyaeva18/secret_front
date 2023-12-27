import { createRouter, createWebHistory } from 'vue-router';
import SenderPage from '@/modules/sender/pages/SenderPage.vue';
import ReceiverPage from '@/modules/receiver/pages/ReceiverPage.vue';

const routes = [
  { path: '/', component: SenderPage },
  { path: '/get/:mesLink', component: ReceiverPage },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});

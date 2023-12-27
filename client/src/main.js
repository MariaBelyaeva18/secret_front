import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { router } from './router/router.js';
import App from './App.vue';

// Vuetify
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app.use(createPinia());
app.use(vuetify);
app.use(router);
app.mount('#app');

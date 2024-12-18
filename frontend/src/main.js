import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueSignaturePad from 'vue-signature-pad';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueSignaturePad);

store.dispatch('darkMode/initializeDarkMode');

app.mount('#app');
import { createStore } from 'vuex';
import darkMode from './modules/darkMode';

import signature from './modules/signature';

import payment from './modules/payment';

const store = createStore({
  modules: {
    darkMode,
    signature,
    payment
  }
});

export default store;

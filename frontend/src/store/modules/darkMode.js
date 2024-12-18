const state = {
  isDarkMode: localStorage.getItem('darkMode') === 'true'
};

const mutations = {
  SET_DARK_MODE(state, payload) {
    state.isDarkMode = payload;
    localStorage.setItem('darkMode', payload);

    document.documentElement.setAttribute('data-theme', payload ? 'dark' : 'light');
  }
};

const actions = {
  initializeDarkMode({ commit }) {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    commit('SET_DARK_MODE', isDarkMode);
  },
  toggleDarkMode({ commit, state }) {
    commit('SET_DARK_MODE', !state.isDarkMode);
  }
};

const getters = {
  isDarkMode: state => state.isDarkMode
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

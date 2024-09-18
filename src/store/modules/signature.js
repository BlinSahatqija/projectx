const state = {
    showSignature: false
  };
  
  const mutations = {
    SET_HAS_SIGNATURE(state, value) {
        state.showSignature = value;
      }
  };
  
  const actions = {
    openSignatureModal({ commit }) {
        commit('SET_HAS_SIGNATURE', true);
      },
      closeSignatureModal({ commit }) {
        commit('SET_HAS_SIGNATURE', false);
      }
  };
  
  const getters = {
    showSignature: state => state.showSignature
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  };
  
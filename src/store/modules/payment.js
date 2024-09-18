const state = {
    showPaymentModal: false
  };
  
  const mutations = {
    SET_PAYMENT_MODAL(state, value) {
        state.showPaymentModal = value;
      }
  };
  
  const actions = {
    openPaymentModal({ commit }) {
        commit('SET_PAYMENT_MODAL', true);
      },
      closePaymentModal({ commit }) {
        commit('SET_PAYMENT_MODAL', false);
      }
  };
  
  const getters = {
    showPaymentModal: state => state.showPaymentModal
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
  };
  
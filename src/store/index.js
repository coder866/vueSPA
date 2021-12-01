import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: [
      {
        username: '',
        email: '',
        verified: '',
        cellphone: '',
        isAdmin: false,
      },
    ],
  },
  actions: {},
  mutations: {},
  getters: {},
});

export default store;

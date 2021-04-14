export default {
  namespace: 'index',
  state: {
    data: null,
  },

  effects: {},

  reducers: {
    index(state, { payload }) {
      state.data = payload;
    },
  },
};

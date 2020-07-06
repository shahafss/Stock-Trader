import stocks from "../../data/stocks";

const state = {
  stocks: []
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS(state) {}
};

const actions = {
  buyStock: ({ commit }, order) => {
    commit();
  },
  randStocks: ({ commit }) => {
    commit("RND_STOCKS");
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocks);
  }
};

const getters = {
  getStocks: state => {
    return state.stocks;
  }
};

export default { state, mutations, actions, getters };

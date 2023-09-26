import { createStore } from "vuex";
import { searchedMeals } from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";
import getters from "./getters";

const store = createStore({
  state: { searchedMeals },
  actions,
  mutations,
  getters,
});

export default store;

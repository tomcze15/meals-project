import { createStore } from "vuex";
import {
  searchedMeals,
  mealsByLetter,
  mealsByIngredient,
  ingredient,
} from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";
import getters from "./getters";

const store = createStore({
  state: { searchedMeals, mealsByLetter, mealsByIngredient, ingredient },
  actions,
  mutations,
  getters,
});

export default store;

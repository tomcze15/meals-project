<template>
  <div>
    <div class="p-8 pb-0">
      <input
        type="text"
        class="rounded border-2 border-gray-200 w-full"
        name=""
        id=""
        :placeholder="$t('Search for Meals')"
        @change="searchMeals"
        v-model="keyword"
      />
    </div>
    <div class="grid grid-cols-1 gap-5 p-8 md:grid-cols-3">
      <MealItem v-for="meal in meals" :meal="meal" :key="meal.idMeal" />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../../store";
import MealItem from "../../components/MealItem.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style scoped></style>

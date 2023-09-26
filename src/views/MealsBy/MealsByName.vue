<template>
  <div>
    <div class="p-8 pb-8">
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
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import store from "../../store";
import Meals from "../../components/Meals.vue";

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style scoped></style>

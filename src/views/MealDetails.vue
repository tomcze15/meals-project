<template>
  <div class="max-w-[800px] mx-auto p-8">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <div class="relative overflow-hidden w-fit">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="transform transition-transform duration-500 hover:scale-105"
      />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold"> {{ $t("Category") }}: </strong>
        {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold"> {{ $t("Area") }}: </strong>
        {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold"> {{ $t("Tags") }}: </strong>
        {{ meal.strTags }}
      </div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">{{ $t("Ingredients") }}</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="meal[`strIngredient${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strIngredient${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">{{ $t("Measures") }}</h2>
        <ul>
          <template v-for="(el, index) of new Array(20)">
            <li v-if="meal[`strMeasure${index + 1}`]">
              {{ index + 1 }}. {{ meal[`strMeasure${index + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
    <div
      class="grid sm:grid-cols-1 sm:gap-y-2 md:gap-x-2 md:grid-cols-2 pt-2 mt-4"
    >
      <YouTubeButton :href="meal.strYoutube">{{
        $t("Go to YouTube")
      }}</YouTubeButton>
      <a
        :href="meal.strSource"
        target="_blank"
        class="px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
      >
        {{ $t("View Original Source") }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../http/axios/axiosClient";
import YouTubeButton from "../components/YouTubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  console.log("dupa");
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

<style scoped></style>

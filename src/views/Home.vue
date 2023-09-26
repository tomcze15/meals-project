<template>
  <div class="flex flex-col p-8"></div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../http/axios/axiosClient";

const meals = computed(() => store.state.meals);

const ingredients = ref([() => store.state.ingredients]);

onMounted(async () => {
  const response = await axiosClient.get("/list.php?i=list");
  ingredients.value = response.data.meals;
});
</script>

<style scoped></style>

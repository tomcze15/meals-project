<template>
  <div class="flex justify-center gap-2 mt-3">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="(letter, index) in letters"
      :key="`${index}-${letter}`"
    >
      {{ letter }}
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import store from "../../store";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>

<style scoped></style>

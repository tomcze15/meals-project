<template>
  <header
    class="max-sm:text-xs bg-white shadow-md h-16 flex justify-between items-stretch"
  >
    <router-link to="/" class="inline-flex items-center px-5 h-full">
      {{ $t("Home") }}
    </router-link>
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        {{ $t("Search Meal") }}
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        {{ $t("Meals By Letter") }}
      </router-link>
      <router-link
        :to="{ name: 'byIngredient' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
      >
        {{ $t("Meals By Ingredient") }}
      </router-link>
    </div>
  </header>
</template>

<script setup></script>

<style scoped></style>

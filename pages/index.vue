<template>
  <AppLayout>
    <div
      class="flex flex-col gap-[25px] w-full max-w-[831px] mx-auto flex-[2] items-center sm:items-start px-[9px] pb-[18px] sm:px-0 flex-[2] order-[2] sm:order-[1]"
    >
      <template v-if="planets && planets.length > 0">
        <PlanetCard
          v-for="(planet, index) in planets"
          :key="index"
          :name="planet.name"
          :population="planet.population"
          :terrain="planet.terrain"
          :climate="planet.climate"
          :selected="selectedPlanets.includes(planet.name)"
          @click="handleClick(planet.name)"
        />
      </template>
      <template v-if="loading">
        <SpinnerLoader loading-text="Fetching planets" />
      </template>

      <AppButton
        v-else-if="error?.status !== 404"
        class="border border-[#747474] py-[11px] px-[20px] w-fit"
        label="Fetch Planets"
        @click="loadMorePlanets"
      />
    </div>
    <PlanetSelection
      class="flex-[1] order-[1] sm:order-[2]"
      :selected-planets="selectedPlanets"
      :on-clear="handleClear"
    />
  </AppLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAxiosCallback } from "~/composables/useAxios";
import SpinnerLoader from "~/components/SpinnerLoader.vue";
import AppLayout from "~/layouts/AppLayout.vue";

const planets = ref([]); // Initialize as an array
const currentPage = ref(1);
const {
  executeRequest: fetchPlanets,
  loading,
  error,
} = useAxiosCallback({
  method: "get",
});

const selectedPlanets = ref([]);

const handleClick = (planet) => {
  if (
    selectedPlanets.value &&
    selectedPlanets.value.length < 5 &&
    !selectedPlanets.value.includes(planet)
  ) {
    selectedPlanets.value.push(planet);
  }
};

const handleClear = () => {
  selectedPlanets.value = [];
};

const loadMorePlanets = () => {
  fetchPlanets({
    instanceUrl: `https://swapi.dev/api/planets/?page=${currentPage.value}`,
    onSuccess: (data) => {
      currentPage.value++;
      planets.value = planets.value.concat(data.results); // Correctly append new data
      console.log("planets", planets.value);
    },
  });
};

onMounted(() => loadMorePlanets());
</script>

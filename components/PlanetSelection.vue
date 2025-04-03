<template>
  <div
    class="flex flex-col gap-[10px] w-full sm:max-w-[524px] w-full sm:h-[1845px] px-[62px] py-[12px] sm:p-[24px] bg-[#DEF8F3]"
  >
    <div
      class="text-[#000000] text-[18px] leading-none font-[600] h-[22px] text-center"
    >
      Your planetary route
    </div>

    <div v-if="selectedPlanets?.length > 0" class="flex flex-col gap-[18px]">
      <div class="flex flex-col gap-[6px] items-center">
        <div
          v-for="(planet, index) in selectedPlanets"
          :key="index"
          class="px-[18px] py-[10px] bg-white max-w-[209px] sm:max-w-[431px] w-full"
        >
          {{ planet }}
        </div>
      </div>

      <span
        class="cursor-pointer text-[#EB5757] flex gap-[6px] self-center text-[16px] sm:text-[22px] leading-none items-center"
        @click="onClear"
      >
        <svg
          class="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0173 0.145714L9.65729 6.51571L3.29729 0.145714L0.467285 2.97571L6.82729 9.34571L0.467285 15.7057L3.29729 18.5357L9.65729 12.1657L16.0173 18.5357L18.8473 15.7057L12.4873 9.34571L18.8473 2.97571L16.0173 0.145714Z"
            fill="#EB5757"
          />
        </svg>
        Clear
      </span>
    </div>

    <div
      v-else
      class="text-[16px] text-[#919191] leading-none font-[600] h-[22px] text-center"
    >
      You have not selected any planets
    </div>
  </div>
</template>

<script setup>
defineProps({
  selectedPlanets: {
    type: Array,
    default: null,
  },
  onClear: {
    type: Function,
    default: null,
  },
});
</script>

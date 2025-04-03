<template>
  <div
    :class="[
      'rounded-[2.72px] sm:rounded-[4px] flex gap-[15.66px] sm:gap-[23px] h-[98px] sm:h-[144px] p-[6.81px] sm:p-[10px] max-w-[831px] w-full',
      {
        'border border-[0.68px] sm:border-[1px] border-[#D1D1D1]': !selected,
        'border border-[4px] border-[#01C3A7]': selected,
      },
    ]"
  >
    <!--prettier-ignore -->
    <img
      :src="randomPicture"
      :alt="name"
      class="fit-cover h-auto sm:w-[124px] w-[84px]"
    >

    <div class="flex flex-col gap-[11.58px] sm:gap-[17px] flex-grow">
      <span
        class="text-[19.57px] sm:text-[28.74px] font-[700] leading-none tracking-[0]"
        >{{ name }}</span
      >
      <div
        class="text-[16.17px] sm:text-[23.75px] font-[400] text-[#000000] opacity-[0.3] flex flex-col leading-none justify-between flex-grow tracking-[0]"
      >
        <span class="line-clamp-1">Climate: {{ climate }}</span>
        <span class="line-clamp-1">Terrain: {{ terrain }}</span>
        <span class="line-clamp-1">Population: {{ formattedPopulation }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  selected: {
    type: Boolean,
    default: true,
  },
  name: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  climate: {
    type: String,
    default: null,
  },
  population: {
    type: String,
    default: null,
  },
  terrain: {
    type: String,
    default: null,
  },
});

const formattedPopulation = useFormattedPopulation(props.population);
const randomPicture = useRandomPicture();
</script>

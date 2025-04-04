<template>
  <div class="flex gap-[12px] items-center w-fit h-[31px]">
    <div
      class="spinner-loader w-[16.33px] h-[16.33px] sm:w-[25px] sm:h-[25px]"
    />
    <span
      class="text-[#676767] font-[400] leading-[1.2] text-[16.33px] sm:text-[25px]"
    >
      {{ loadingText }}
    </span>
  </div>
</template>

<script setup>
defineProps({
  loadingText: {
    type: String,
    default: "Loading...",
  },
});
</script>

<style scoped>
.spinner-loader {
  aspect-ratio: 1;
  display: grid;
  border-radius: 50%;
  background: linear-gradient(
        0deg,
        rgb(0 0 0/50%) 30%,
        #0000 0 70%,
        rgb(0 0 0/100%) 0
      )
      50%/8% 100%,
    linear-gradient(90deg, rgb(0 0 0/25%) 30%, #0000 0 70%, rgb(0 0 0/75%) 0)
      50%/100% 8%;
  background-repeat: no-repeat;
  animation: circle 1s infinite steps(12);
  animation-duration: 1s;
}
.spinner-loader::before,
.spinner-loader::after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  opacity: 0.915;
  transform: rotate(30deg);
}
.spinner-loader::after {
  opacity: 0.83;
  transform: rotate(60deg);
}
@keyframes circle {
  100% {
    transform: rotate(1turn);
  }
}
</style>

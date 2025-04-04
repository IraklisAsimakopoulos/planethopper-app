<template>
  <div class="flex flex-col items-center sm:px-[20px]">
    <AppHeader />
    <div
      class="m-auto flex flex-col sm:flex-row w-full max-w-[1512px] gap-[16px] sm:gap-[20px]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import AppHeader from "../components/AppHeader.vue";
</script>

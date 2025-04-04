<template>
  <button class="border border-[#747474] py-[11px] px-[20px] w-fit">
    {{ label }}
    <slot />
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: "",
  },
});
</script>

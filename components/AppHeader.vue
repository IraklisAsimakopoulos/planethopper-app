<template>
  <div
    class="w-full h-[56px] sm:h-[184px] font-[700] text-[22px] sm:text-[72px] leading-none flex sm:justify-center items-center justify-between pl-[20px] pr-[9.66px] pt-[18px] pb-[11px] sm:p-0"
  >
    <span class="">Planet Hopper</span>
    <span
      class="font-[400] text-[14.27px] sm:text-[22.28px] leading-none flex gap-[4px] items-center sm:absolute sm:top-[18.59px] sm:right-[20px] cursor-pointer"
      @click="handleRestart"
    >
      <svg
        class="w-[12.8px] h-[12.8px] sm:w-[20px] sm:h-[20px]"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5019 11.5501C10.34 12.5569 8.8535 13.1101 7.31608 13.108C3.77957 13.108 0.912842 10.2413 0.912842 6.70475C0.912842 3.16824 3.77957 0.301514 7.31608 0.301514C10.8526 0.301514 13.7193 3.16824 13.7193 6.70475C13.7193 8.07248 13.2903 9.34032 12.5603 10.3802L10.5177 6.70475H12.4387C12.4386 5.52413 12.0307 4.37978 11.284 3.46528C10.5372 2.55079 9.49757 1.9223 8.34081 1.68612C7.18405 1.44995 5.98122 1.62059 4.93579 2.16919C3.89036 2.71778 3.06652 3.61065 2.60363 4.69675C2.14074 5.78285 2.06722 6.9955 2.39551 8.12956C2.72379 9.26363 3.43373 10.2495 4.40522 10.9204C5.37671 11.5912 6.55012 11.906 7.72694 11.8113C8.90376 11.7166 10.0117 11.2183 10.8635 10.4007L11.5019 11.5501Z"
          fill="black"
        />
      </svg>

      restart demo</span
    >
  </div>
</template>

<script setup>
const handleRestart = () => {
  window.location.reload();
};
</script>

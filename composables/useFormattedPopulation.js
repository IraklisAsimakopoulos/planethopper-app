export function useFormattedPopulation(population) {
  return computed(() => {
    if (isNaN(population)) return population;
    return new Intl.NumberFormat().format(population);
  });
}

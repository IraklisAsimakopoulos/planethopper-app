import { describe, it, expect } from "vitest";
import { ref } from "vue";
import { useFormattedPopulation } from "./useFormattedPopulation";

describe("useFormattedPopulation", () => {
  it("formats a number with commas", () => {
    const population = ref("1000");
    const formatted = useFormattedPopulation(population.value);

    expect(formatted.value).toBe("1,000");
  });

  it("returns the original value if not a number", () => {
    const population = ref("unknown");
    const formatted = useFormattedPopulation(population.value);

    expect(formatted.value).toBe("unknown");
  });

  it("handles large numbers correctly", () => {
    const population = ref("1000000");
    const formatted = useFormattedPopulation(population.value);

    expect(formatted.value).toBe("1,000,000");
  });
});

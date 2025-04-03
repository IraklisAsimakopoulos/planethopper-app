import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import PlanetSelection from "./PlanetSelection.vue";

describe("PlanetSelection", () => {
  it("renders selected planets", () => {
    const selectedPlanets = ["Earth", "Mars"];
    const wrapper = mount(PlanetSelection, {
      props: {
        selectedPlanets,
      },
    });

    selectedPlanets.forEach((planet) => {
      expect(wrapper.text()).toContain(planet);
    });
  });

  it("renders message when no planets are selected", () => {
    const wrapper = mount(PlanetSelection, {
      props: {
        selectedPlanets: [],
      },
    });

    expect(wrapper.text()).toContain("You have not selected any planets");
  });

  it("calls onClear when clear button is clicked", async () => {
    const onClearMock = vi.fn();
    const wrapper = mount(PlanetSelection, {
      props: {
        selectedPlanets: ["Earth"],
        onClear: onClearMock,
      },
    });

    await wrapper.find("span.cursor-pointer").trigger("click");

    expect(onClearMock).toHaveBeenCalled();
  });
});

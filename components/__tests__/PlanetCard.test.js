import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import PlanetCard from "../PlanetCard.vue";

vi.mock("../../composables/useFormattedPopulation", () => ({
  useFormattedPopulation: vi.fn(() => "1,000"),
}));

vi.mock("../../composables/useRandomPicture", () => ({
  useRandomPicture: vi.fn(() => "https://example.com/image.jpg"),
}));

describe("PlanetCard", () => {
  it("renders correctly with props", () => {
    const wrapper = mount(PlanetCard, {
      props: {
        selected: true,
        name: "Earth",
        climate: "Temperate",
        population: "1000",
        terrain: "Varied",
      },
    });

    expect(wrapper.text()).toContain("Earth");
    expect(wrapper.text()).toContain("Climate: Temperate");
    expect(wrapper.text()).toContain("Terrain: Varied");
    expect(wrapper.text()).toContain("Population: 1,000");
  });

  it("applies selected class when selected", () => {
    const wrapper = mount(PlanetCard, {
      props: {
        selected: true,
      },
    });

    expect(wrapper.classes()).toContain("border-[4px]");
  });

  it("applies default class when not selected", () => {
    const wrapper = mount(PlanetCard, {
      props: {
        selected: false,
      },
    });

    expect(wrapper.classes()).toContain("border-[0.68px]");
  });

  it("renders the random picture", () => {
    const wrapper = mount(PlanetCard, {
      props: {
        name: "Earth",
      },
    });

    const img = wrapper.find("img");
    expect(img.attributes("src")).toBe("https://example.com/image.jpg");
  });
});

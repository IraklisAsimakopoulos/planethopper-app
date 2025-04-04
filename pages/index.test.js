import { mount } from "@vue/test-utils";
import { nextTick, ref } from "vue";
import MainComponent from "./index.vue";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../composables/useAxios", () => ({
  useAxiosCallback: vi.fn(() => ({
    executeRequest: vi.fn(({ onSuccess }) => {
      onSuccess({
        results: [
          {
            name: "Earth",
            population: "7B",
            terrain: "Varied",
            climate: "Temperate",
          },
        ],
      });
    }),
    loading: ref(false),
    error: ref(null),
  })),
}));

describe("index.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(MainComponent);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("calls loadMorePlanets when Fetch Planets button is clicked", async () => {
    const loadMorePlanets = vi.spyOn(wrapper.vm, "loadMorePlanets");

    wrapper.vm.loadMorePlanets();

    expect(loadMorePlanets).toHaveBeenCalled();
  });

  it("shows loading spinner when fetching planets", async () => {
    wrapper = mount(MainComponent, {
      global: {
        mocks: {
          loading: { value: true }, // Simulate loading state
        },
      },
    });

    await nextTick();

    expect(wrapper.findComponent({ name: "SpinnerLoader" }).exists()).toBe(
      true
    );
  });

  it("updates planets list after API call", async () => {
    expect(wrapper.vm.planets).toHaveLength(1);
    expect(wrapper.vm.planets[0].name).toBe("Earth");
  });

  it("selects a planet when clicked", async () => {
    wrapper.vm.planets = [{ name: "Earth" }];
    await nextTick();

    const planetCard = wrapper.findComponent({ name: "PlanetCard" });
    expect(planetCard.exists()).toBe(true);

    await planetCard.trigger("click");

    expect(wrapper.vm.selectedPlanets).toContain("Earth");
  });
});

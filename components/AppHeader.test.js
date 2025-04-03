import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import AppHeader from "./AppHeader.vue";

describe("AppHeader", () => {
  it("should call window.location.reload when restart is clicked", async () => {
    const reloadMock = vi.fn();
    Object.defineProperty(window, "location", {
      value: { reload: reloadMock },
      writable: true,
    });

    const wrapper = mount(AppHeader);

    expect(wrapper.text()).toContain("Planet Hopper");
    expect(wrapper.text()).toContain("restart demo");

    await wrapper.find("#restart").trigger("click");

    expect(reloadMock).toHaveBeenCalled();
  });
});

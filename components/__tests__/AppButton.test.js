import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import AppButton from "../AppButton.vue";

describe("AppButton", () => {
  it("renders the label correctly", () => {
    const label = "Click Me";
    const wrapper = mount(AppButton, {
      props: { label },
    });

    expect(wrapper.text()).toContain(label);
  });

  it("renders slot content", () => {
    const slotContent = "<span>Slot Content</span>";
    const wrapper = mount(AppButton, {
      props: { label: "Button" },
      slots: {
        default: slotContent,
      },
    });

    expect(wrapper.html()).toContain(slotContent);
  });
});

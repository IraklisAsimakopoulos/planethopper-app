import { describe, it, expect, vi } from "vitest";
import { useRandomPicture } from "./useRandomPicture";

describe("useRandomPicture", () => {
  it("returns a random picture URL", () => {
    const urls = [
      "https://images.ferryhopper.com/locations/Skiathos.jpg",
      "https://images.ferryhopper.com/locations/Naxos.jpg",
    ];

    vi.spyOn(Math, "random").mockReturnValue(0.5);

    const randomPicture = useRandomPicture();

    expect(urls).toContain(randomPicture.value);

    vi.restoreAllMocks();
  });
});

import { useAxios, useAxiosCallback } from "../useAxios";
import axios from "axios";
import { vi, describe, it, expect, beforeEach } from "vitest";

vi.mock("axios");

describe("useAxios", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should fetch data successfully", async () => {
    const mockData = { data: "test data" };
    const mockAxiosInstance = vi
      .fn()
      .mockResolvedValue({ data: mockData, status: 200 });

    axios.create.mockReturnValue(mockAxiosInstance);

    const { data, loading, error, status } = useAxios({
      method: "GET",
      url: "/test-url",
    });

    expect(loading.value).toBe(true);

    await new Promise(process.nextTick);

    expect(loading.value).toBe(false);
    expect(data.value).toEqual(mockData);
    expect(status.value).toBe(200);
    expect(error.value).toBe(null);
  });

  it("should handle error", async () => {
    const mockError = { response: { status: 404 } };
    const mockAxiosInstance = vi.fn().mockRejectedValue(mockError);

    axios.create.mockReturnValue(mockAxiosInstance);

    const { data, loading, error, status } = useAxios({
      method: "GET",
      url: "/test-url",
    });

    expect(loading.value).toBe(true);

    await new Promise(process.nextTick);

    expect(loading.value).toBe(false);
    expect(data.value).toBe(null);
    expect(status.value).toBe(404);
    expect(error.value).toEqual(mockError);
  });
});

describe("useAxiosCallback", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should execute request successfully", async () => {
    const mockData = { data: "test data" };
    const mockAxiosInstance = vi
      .fn()
      .mockResolvedValue({ data: mockData, status: 200 });

    axios.create.mockReturnValue(mockAxiosInstance);

    const { data, executeRequest, loading, error, status } = useAxiosCallback({
      method: "GET",
      url: "/test-url",
    });

    executeRequest();

    expect(loading.value).toBe(true);

    await new Promise(process.nextTick);

    expect(loading.value).toBe(false);
    expect(data.value).toEqual(mockData);
    expect(status.value).toBe(200);
    expect(error.value).toBe(null);
  });
});

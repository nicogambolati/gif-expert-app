import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Test in custonHook - useFetchGifs", () => {
  test("debe volver al estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    // console.log(result);
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("should return an array of images and isLoading in false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    // Espera a que esta condicion se cumpla
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});

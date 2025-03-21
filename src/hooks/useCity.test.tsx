import { CityProvider } from "@contexts/CityContext";
import { useCity } from "@hooks/useCity";
import { act, renderHook, waitFor } from "@testing-library/react-native";

describe("hook: useCity", () => {
  it("should be change selected city", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    await waitFor(() =>
      act(() =>
        result.current.handleChangeCity({
          id: "1",
          name: "São Paulo",
          longitude: 123,
          latitude: 456,
        })
      )
    );

    expect(result.current.city?.name).toBe("São Paulo");
  });
});

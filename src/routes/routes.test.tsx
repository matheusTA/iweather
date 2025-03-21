import { act, render, screen, waitFor } from "@testing-library/react-native";
import { Routes } from ".";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { CityProps } from "@services/getCityByNameService";
import { customRender } from "@__tests__/utils/customRender";
import { api } from "@services/api";
import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";

describe("routes", () => {
  it("should be render the search screen when not city selected", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });

  it("should be render the dashboard screen when city is selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockWeatherAPIResponse,
    });

    const city: CityProps = {
      id: "1",
      name: "São Paulo",
      latitude: 123,
      longitude: 456,
    };

    await saveStorageCity(city);

    customRender(<Routes />);

    const title = await waitFor(() => screen.getByText(city.name));

    expect(title).toBeTruthy();
  });
});

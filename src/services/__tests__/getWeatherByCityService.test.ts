import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherAPIResponse";
import { api } from "@services/api";
import { getWeatherByCityService } from "@services/getWeatherByCityService";

describe("service: getWeatherByCityService", () => {
  it("should br return weather api data formatted", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockWeatherAPIResponse,
    });

    const weather = await getWeatherByCityService({
      latitude: 1,
      longitude: 1,
    });

    expect(weather).toHaveProperty("today");
    expect(weather).toHaveProperty("nextDays");
  });
});

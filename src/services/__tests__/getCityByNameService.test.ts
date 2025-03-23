import { mockCityAPIResponse } from "@__tests__/mocks/api/mockCityAPIResponse";
import { api } from "@services/api";
import { getCityByNameService } from "@services/getCityByNameService";

describe("service: getCityByNameService", () => {
  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockCityAPIResponse,
    });

    const city = await getCityByNameService("City");

    expect(city).toEqual([
      {
        id: "123",
        name: "City, Country",
        longitude: 1,
        latitude: 1,
      },
    ]);
  });
});

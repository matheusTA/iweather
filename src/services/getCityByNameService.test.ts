import { mockCityAPIResponse } from "@__tests__/mocks/mockCityAPIResponse";
import { getCityByNameService } from "./getCityByNameService";
import { api } from "./api";

describe("api: getCityByNameService", () => {
  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: [mockCityAPIResponse],
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

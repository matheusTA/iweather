import { CityAPIResponse } from "@services/getCityByNameService";

export const mockCityAPIResponse: CityAPIResponse = {
  id: "123",
  name: "City",
  sys: {
    country: "Country",
  },
  coord: {
    lon: 1,
    lat: 1,
  },
};

import { CityProps } from "@services/getCityByNameService";
import {
  getStorageCity,
  saveStorageCity,
  removeStorageCity,
} from "./cityStorage";

const newCity: CityProps = {
  id: "1",
  name: "City",
  longitude: 1,
  latitude: 1,
};

describe("storage: cityStorage", () => {
  it("should be return null when dont have a city storaged", async () => {
    const city = await getStorageCity();

    expect(city).toBeNull();
  });

  it("should be return city when have a city storaged", async () => {
    await saveStorageCity(newCity);
    const city = await getStorageCity();

    expect(city).toEqual(newCity);
  });

  it("should be remove city when call removeStorageCity", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();

    const city = await getStorageCity();

    expect(city).toBeNull();
  });
});

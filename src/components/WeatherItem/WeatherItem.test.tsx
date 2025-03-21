import { render, screen } from "@testing-library/react-native";
import clearDay from "@assets/clear_day.svg";
import { WeatherItem } from ".";

describe("component: WeatherItem", () => {
  it("should be render", () => {
    render(
      <WeatherItem icon={clearDay} title="Sensação térmica" value="27°C" />
    );

    expect(screen.getByText("Sensação térmica")).toBeTruthy();
    expect(screen.getByText("27°C")).toBeTruthy();
  });
});

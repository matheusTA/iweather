import { render, screen } from "@testing-library/react-native";
import clearDay from "@assets/clear_day.svg";
import { NextDays } from ".";

describe("component: NextDays", () => {
  it("should be render", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "25°C",
            max: "31°C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "26°C",
            max: "32°C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "20/07",
            min: "28°C",
            max: "33°C",
            icon: clearDay,
            weather: "Céu limpo",
          },
        ]}
      />
    );

    expect(screen.getByText("18/07")).toBeTruthy();
    expect(screen.getByText("19/07")).toBeTruthy();
    expect(screen.getByText("20/07")).toBeTruthy();
  });
});

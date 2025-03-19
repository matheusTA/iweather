import { render, screen } from "@testing-library/react-native";
import { Day } from ".";
import clearDay from "@assets/clear_day.svg";

describe("component: day", () => {
  it("should be render day", () => {
    render(
      <Day
        data={{
          day: "18/07",
          min: "27°C",
          max: "31°C",
          icon: clearDay,
          weather: "Céu limpo",
        }}
      />
    );

    expect(screen.getByText("18/07")).toBeTruthy();
    expect(screen.getByText("27°C")).toBeTruthy();
    expect(screen.getByText("31°C")).toBeTruthy();
  });
});

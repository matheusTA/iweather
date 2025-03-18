import { SelectList } from ".";
import { render, screen, fireEvent } from "@testing-library/react-native";

describe("component: selectList", () => {
  it("should be return city details selected", () => {
    const citiesList = [
      {
        id: "1",
        name: "São Paulo",
        latitude: 123,
        longitude: 456,
      },
      {
        id: "2",
        name: "Rio de Janeiro",
        latitude: 321,
        longitude: 654,
      },
    ];
    const onPress = jest.fn();

    render(
      <SelectList data={citiesList} onChange={() => {}} onPress={onPress} />
    );

    const selectedCity = screen.getByText("São Paulo");
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledWith(citiesList[0]);
  });

  it("not should be show options when data props is empty ", () => {
    const onPress = jest.fn();

    render(<SelectList data={[]} onChange={() => {}} onPress={onPress} />);

    const options = screen.queryByTestId("options");

    expect(options.children).toHaveLength(0);
  });
});

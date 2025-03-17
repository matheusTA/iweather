import { getNextDays } from "../getNextDays";

describe("get next days function", () => {
  it("should be return the next five days", () => {
    const days = getNextDays();

    expect(days).toHaveLength(5);
  });
});

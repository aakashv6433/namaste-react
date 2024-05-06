import { sum } from "../../../sum";

test("sum fn should return the sum of 2 numbers", () => {
  const res = sum(7, 12);
  expect(res).toBe(19);
});

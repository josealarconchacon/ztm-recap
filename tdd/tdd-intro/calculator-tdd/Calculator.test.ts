import { i } from "vite/dist/node/types.d-aGj9QkWt";
import { Calculator } from "./Calculator";

describe("Calculator", () => {
  let calculator: Calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  // it should add two numbers
  test("adds 1 + 2 to equal 3", () => {
    expect(calculator.add(1, 2)).toEqual(3);
  });

  it("should subtract two numbers", () => {
    expect(calculator.subtract(3, 2)).toEqual(1);
  });

  it("should multiply two numbers", () => {
    expect(calculator.multiply(4, 5)).toBe(20);
  });

  it("should divide two numbers", () => {
    expect(calculator.divide(9, 3)).toBeCloseTo(3, -2);
  });

  it("should % ", () => {
    expect(calculator.reminder(9, 3)).toBe(0);
  });
});

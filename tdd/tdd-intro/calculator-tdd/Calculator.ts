export class Calculator {
  // validate inputs
  private validateInputs(a: number, b: number): void {
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Both arguments must be numbers");
  }
  // add method
  add(a: number, b: number): number {
    this.validateInputs(a, b);
    return a + b;
  }

  // subtract method
  subtract(a: number, b: number): number {
    this.validateInputs(a, b);
    return a - b;
  }

  // multiply method
  multiply(a: number, b: number): number {
    this.validateInputs(a, b);
    return a * b;
  }

  // divide method
  divide(a: number, b: number): number {
    this.validateInputs(a, b);
    return a / b;
  }

  // remainder method
  reminder(a: number, b: number): number {
    this.validateInputs(a, b);
    return a % b;
  }
}

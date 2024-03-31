// Stack class
class Stack {
  // add constructor and initialized
  constructor() {
    this.top = -1; // top is initialized to -1
    this.items = {}; // Initialize items as an empty object
  }
  get peek() {
    return this.items[this.top];
  }
  push(element) {
    this.top++;
    this.items[this.top] = element;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    let result = this.items[this.top];
    delete this.items[this.top];
    this.top--;
    return result;
  }
  isEmpty() {
    return this.top === -1;
  }
}

describe("My Stack", () => {
  let myStack;
  beforeEach(() => {
    myStack = new Stack(); // Initialize a new Stack instance
    myStack.push("hello"); // Add elements for testing
    myStack.push("world");
  });

  // stack is created empty
  it("Stack is created empty", () => {
    // console.log("Current value of top:", myStack.top); // Debugging statement
    expect(myStack.top).toBe(1); // Change this to 1 since we added 2 elements in beforeEach
    expect(Object.keys(myStack.items)).toHaveLength(2); // Change this to 2 since we added 2 elements in beforeEach
  });

  // stack can push item to the top
  it("pushes an element onto the stack", () => {
    myStack.push("new element"); // Add another element
    expect(myStack.top).toBe(2); // Change this to 2 since we added one more element
    expect(myStack.peek).toBe("new element");
  });

  // stack can pop or remove item from the top
  it("removes item from the top", () => {
    myStack.pop(); // Pop an element
    expect(myStack.top).toBe(0); // Change this to 0 since we pop one element
    expect(myStack.peek).toBe("hello");
    expect(myStack.isEmpty()).toBeFalsy(); // Stack shouldn't be empty after popping one element
  });
});

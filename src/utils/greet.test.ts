import { greet } from "./greet";

test("greet returns a string", () => {
  expect(greet).toBe("Are you a FizzBuzz Wizz?");
});

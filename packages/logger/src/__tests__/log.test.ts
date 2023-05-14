import { consolelog } from "..";

jest.spyOn(global.console, "log");

describe("logger", () => {
  it("prints a message", () => {
    consolelog("hello");
    expect(console.log).toBeCalled();
  });
});

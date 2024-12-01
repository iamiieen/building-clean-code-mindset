import { describe, it, expect } from "vitest";
import { hello } from ".";

describe("Index", () => {
  it("should return hello", () => {
    expect(hello()).toEqual("hello");
  });
});

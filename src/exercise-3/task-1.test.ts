import { describe, it, expect } from "vitest";
import { processUsers, totalSalary, User } from "./task-1.ts";

describe("task-1", () => {
  it("should process users data", () => {
    const users: User[] = [
      { name: "Alice", baseSalary: 50000, taxRate: 0.2, bonus: 5000 },
      { name: "Bob", baseSalary: 60000, taxRate: 0.15, bonus: 4000 },
      { name: "Charlie", baseSalary: 70000, taxRate: 0.1, bonus: 1000 },
    ];
    processUsers(users);
    expect(totalSalary).toEqual(164000);
  });
});

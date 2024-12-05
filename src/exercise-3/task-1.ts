export var totalSalary = 0;

export interface User {
  name: string;
  baseSalary: number;
  taxRate: number;
  bonus: number;
}

const calculateSalary = (
  baseSalary: number,
  taxRate: number,
  bonus: number
): number => {
  const salaryAfterTax = baseSalary - baseSalary * taxRate;
  const finalSalary = salaryAfterTax + bonus;
  return finalSalary;
};

const updateTotalSalary = (salary: number): void => {
  totalSalary += salary;
};

const logUserSalary = (user: User, salary: number): void => {
  console.log(
    `${user.name}: Base Salary = $${user.baseSalary}, Tax Rate = ${user.taxRate * 100}%, Bonus = $${user.bonus}, Final Salary = $${salary}`
  );
  updateTotalSalary(salary);
};

export const processUsers = (users: User[]): void => {
  users.forEach((user) => {
    const salary = calculateSalary(user.baseSalary, user.taxRate, user.bonus);
    logUserSalary(user, salary);
  });
};

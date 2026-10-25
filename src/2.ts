class Employee {
  public name: string;
  private department: string;
  protected salary: number;

  constructor(name: string, department: string, salary: number) {
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getEmployeeDetails(): string {
    return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name: string, department: string, salary: number) {
    super(name, department, salary);
    this.salary += 10000;
  }
}

const employee = new Employee('Anna', 'Development', 30000);
const manager = new Manager('Olena', 'Development', 30000);
console.log(employee.getEmployeeDetails());
console.log(manager.getEmployeeDetails());

export { Employee, Manager };

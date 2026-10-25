class Student {
  constructor(
    public name: string,
    public age: number,
    public grade: string
  ) {}
}

const student = new Student('Anna', 20, 'A');
console.log(student.name, student.age, student.grade);

export { Student };

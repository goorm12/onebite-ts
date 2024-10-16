/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "goorm",
  age: 27,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필트
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee("goorm", 27, "개발자");
console.log(employeeB);

// 클래스는 타입으로도 사용할 수 있다.
const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

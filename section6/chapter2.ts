/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  // private name: string;
  // protected age: number;
  // public position: string;

  // 생성자 함수에 선언하면 필드에는 선언 안 해도 자동으로 선언된다.
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`); // 클래스 내부에서만 이 필드에 접근할 수 있음
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
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

  // 메서드
  func() {
    // private는 파생클래스에서도 접근이 불가능하다.
    // this.name; //  'name' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.

    // protected는 파생클래스에서 접근이 가능하다.
    this.age;
  }
}

const employee = new Employee("goorm", 27, "developer");
// employee.name = "goom2"; // 'name' 속성은 private이며 'Employee' 클래스 내에서만 액세스할 수 있습니다.
// employee.age = 79; // 'age' 속성은 보호된 속성이며 'Employee' 클래스 및 해당 하위 클래스 내에서만 액세스할 수 있습니다.

employee.position = "디자이너";
console.log(employee);

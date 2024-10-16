/**
 * 인터페이스
 */

interface Person {
  readonly name: string; // 읽기 전용 프로퍼티
  age?: number; // 선택적 프로퍼티

  // 메서드 타입 정의
  // sayHi: () => void; // 함수 표현식, 오버로딩 X
  sayHi(): void; // 호출 시그니쳐, 오버로딩 가능 O
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "goorm",
  sayHi: function () {
    console.log("Hi");
  },
};

person.sayHi();

// any
// 특정 변수의 타입을 확실히 모를 때 사용할 수 있는 타입
let anyVar: any = 10;

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// 연산 불가능
// 메서드 사용 불가능

// 타입 정제 또는 타입좁히기를 통해서만 unknown타입의 값을 사용할 수 있다.
if (typeof unknownVar === "number") {
  // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
  num = unknownVar;
}

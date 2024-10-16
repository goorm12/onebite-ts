/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은(는) age살 입니다.

function func(value: number | string | Date | null | Person) {
  // 타입 가드
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
  // instanceof 타입가드 : 내장 클래스 또는 직접 만든 클래스에만 사용가능
  else if (value instanceof Date) {
    console.log(value.getTime());
    // 직접 만든 타입에는 in을 사용
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}

/**
 * 제네릭
 */

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");

// 제네릭 함수를 호출할 때 다음과 같이 타입 변수에 할당할 타입을 직접 명시하는 것도 가능하다
let arr = func<[number, number, number]>([1, 2, 3]);

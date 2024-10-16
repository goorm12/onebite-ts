/**
 * 선언 합침
 */
// 인터페이스는 중복선언 가능, 모든 선언이 합쳐지게 됨
interface Person {
  name: string;
}

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "",
  age: 1,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello",
};

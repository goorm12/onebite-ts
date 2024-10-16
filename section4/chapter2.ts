/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; // 업캐스팅
// b = a; // 다운캐스팅, 'A' 형식은 'B' 형식에 할당할 수 없습니다. 'number' 형식은 '10' 형식에 할당할 수 없습니다.

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 매개 변수 기준은 업 캐스팅일때는 호환 X ('D' 형식은 'C' 형식에 할당할 수 없습니다.)
//'value' 및 'value' 매개 변수의 형식이 호환되지 않습니다. 'number' 형식은 '10' 형식에 할당할 수 없습니다.
d = c; // 매개 변수 기준은 다운 캐스팅일때는 호환 O

// 수퍼타입
type Animal = {
  name: string;
};

// 서브타입
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc; // '(dog: Dog) => void' 형식은 '(animal: Animal) => void' 형식에 할당할 수 없습니다. 'dog' 및 'animal' 매개 변수의 형식이 호환되지 않습니다. 'color' 속성이 'Animal' 형식에 없지만 'Dog' 형식에서 필수입니다.
let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); //  'Animal' 형식에 'color' 속성이 없습니다.
};

dogFunc = animalFunc;
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; //'Func1' 형식은 'Func2' 형식에 할당할 수 없습니다.

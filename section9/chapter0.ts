/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

// ObjB 타입이 ObjA타입의 서브타입인지 확인 참이라면 number 거짓이라면 string
type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타임
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// string

let varB: StringNumberSwitch<string>;
// number

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im goorm"); // string

let result2 = removeSpaces(undefined); // undefined

/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person;
person.name = "goorm";
person.age = 99;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // ✅ 10은 number타입, never는 모든 타입의 서브타입 -> A가 B의 슈퍼타입
let num2 = 10 as unknown; // ✅ 10은 number타입, unknown은 모든 타입의 슈퍼타입인 전체 집합타임 -> A가 B의 서브타입

let num3 = 10 as unknown as string; // 다중 단언으로 가능하게 만들 수 있지만 사용 X

/**
 * const 단언
 */

let num4 = 10 as const; // 10 Number Literal 타입으로 단언됨

let cat = {
  name: "야옹이",
  color: "black",
} as const; // 모든 프로퍼티가 readonly를 갖도록 단언됨

// cat.name = "";

/**
 * Non Null 단언
 * 값 뒤에 !를 붙여주면 값이 `undefined`이거나 `null`이 아닐것으로 단언할 수 있다.
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "goorm",
};

const len: number = post.author!.length;

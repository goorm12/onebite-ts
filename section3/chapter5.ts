/**
 * 타입 추론
 * 변수에 초기 값을 기준으로 자동으로 타입을 추론해줌
 *
 */

let a = 10;

let b = "hello";

let c = {
  id: 1,
  name: "vin",
  profile: {
    nickname: "goorm",
  },
  urls: ["https://velog.io/@goorm10/posts"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func() {
  return "hello";
}

function func2(message = "hello") {
  return "hello";
}

let d;
d = 10;
d.toFixed();
// d.toUpperCase(); // number 타입이라 오류

d = "hello";
d.toUpperCase();

const num = 10; // 10 Number Literal 타입으로 추론
const str = "hello"; // hello String Literal 타입으로 추론

let arr = [1, "string"]; // (string | number)[] 타입으로 추론

// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN, // 기본값은 0부터, 지정한 값이 있으면 그 값부터 시작
  USER = 10, // 10부터 시작
  GUEST, // 11 할당
}

enum Language {
  korean = "ko",
  english = "en",
}

const user4 = {
  name: "goorm",
  role: Role.ADMIN, // 관리자
  language: Language.korean,
};

const user5 = {
  name: "vin",
  role: Role.GUEST, // 일반 유저
};

const user6 = {
  name: "so",
  role: Role.USER, // 게스트
};

console.log(user4, user5, user6); // { name: 'goorm', role: 0 } { name: 'vin', role: 10 } { name: 'so', role: 11 }

console.log(user4); // { name: 'goorm', role: 0, language: 'ko' }

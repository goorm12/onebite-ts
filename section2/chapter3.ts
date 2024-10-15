// object
// 객체 리터럴 타입
// 구조적 타입 시스템 - Property Based Type
let user: {
  // 선택적 프로퍼티 optional
  id?: number;

  name: string;
} = {
  id: 1,
  name: "goorm",
};

let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
// 에러메세지 : 읽기 전용 속성이므로 'apiKey'에 할당할 수 없습니다.

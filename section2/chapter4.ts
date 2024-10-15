// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  bio: string;
};

let user1: User = {
  id: 1,
  name: "Vin",
  nickname: "goorm",
  bio: "안녕하세요",
};

// 인덱스 시그니처
// 주의 사항 :  [key: string]: string; 규칙을 위반하지만 않으면 모든 객체를 허용 아무것도 없는 프로퍼티가 있더라도 규칙을 위반한 프로퍼티가 없기때문에 허용함
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};

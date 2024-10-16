/**
 * 인터페이스의 확장
 */

type Animal = {
  name: string;
  color: string;
};

// Dog 인터페이스에 Animal 인터페이스를 확장하여 사용하겠다.
interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

// 다중 확장
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};

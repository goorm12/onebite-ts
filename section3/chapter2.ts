/**
 * unknown 타입
 * 타입계층도의 최상단
 */

function unknownExam() {
  // 모든 타입은 unknown타입으로 업캐스팅 가능
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  /**
   * 다운캐스팅 불가능
   * let unknownVar: unknown;
   * let num: number = unknownVar;
   * let str: string = unknownVar;
   * let bool: boolean = unknownVar;
   * */
}

/**
 * Never 타입 -> 공집합
 * 모든 타입의 서브 타입
 * 타입계층의 최하단
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  /**
   *  never타입은 모든 타입으로 업캐스트 가능
   *  let num: number = neverFunc();
   *  let str: string = neverFunc();
   *  let bool: boolean = neverFunc();
   *  let never1: never = 10;
   *  let never2: never = "string";
   * let never3: never = true;
   */
}

/**
 * void 타입
 * undefined의 슈퍼타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * any 타입
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  // let neverVar: never;

  // unknown타입이 any타입으로 다운캐스팅 가능
  // any타입 한정으로는 다운캐스팅 가능
  anyVar = unknownVar;
  // any타입이 undefined로 다운캐스팅 가능
  undefinedVar = anyVar;

  // never타입은 공집합이기때문에 어떤 타입도 다운 캐스팅 불가능
  // neverVar = anyVar;
}

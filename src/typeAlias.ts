// theory ======================================//
// type은 특정 타입에 별칭을 붙이는 용도로 사용 (alias)
// 객체나 배열 혹은 어떤 타입이든 별칭을 지어줄 수 있다.
// 라이브러리를 만들거나 다른 라이브러리를 위한 타입 지원 파일을
// 작성할때는 type 보다는 interface가 권장된다.

// Example1 ====================================== //

type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  // & (intersection) 두개 이상의 타입을 합침
  skills: string[];
};

const person: Person = {
  name: "godori"
};

const developer: Developer = {
  name: "goveloper",
  skills: ["java", "js"]
};

type People = Person[]; // 이제 Person[]을 People 이라는 타입으로 사용할 수 있다
const people: People = [person, developer];

// Example 2 ====================================== //
type myColor = "red" | "orange" | "yellow";
const color: myColor = "red";
const colors: myColor[] = ["red", "orange"];

// Example 3 ====================================== //
type Color = {
  name: string;
  hex?: string;
};

type Colors = Color[];

const red: Color = {
  name: "red",
  hex: "#ff0000"
};

const green: Color = {
  name: "green",
  hex: "#00ff00"
};

const blue: Color = {
  name: "blue",
  hex: "#0000ff"
};

const rgb: Colors = [red, green, blue];

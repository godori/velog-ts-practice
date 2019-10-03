// ?  다른 파일에 있는 인터페이스도 영향이 있네 ;

interface Person {
  name: string;
  age?: number; // 설정 해도 되고 안 해도 되는 값. 옵셔널?
}

// person과 유사한 점이 많은 developer 인터페이스
interface Developer {
  name: string;
  age?: number;
  skills: string[];
}

// person을 상속받아서 디자이너를 만들어봅시다 (c.f. 개발자는 사람이 아니다)
interface Designer extends Person {
  skills: string[];
}

const person: Person = {
  name: "goperson",
  age: 17
};

const developer: Developer = {
  name: "goveloper",
  skills: ["java", "javascript", "react"]
};

const designer: Designer = {
  name: "gosigner",
  skills: ["photoshop", "Adobe AI"]
};

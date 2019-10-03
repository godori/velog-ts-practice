// any를 쓸 거면 TS를 쓸 이유가 없지!
function merge(a: any, b: any): any {
  return {
    ...a,
    ...b
  };
}
const merged = merge({ foo: 1 }, { bar: 1 });

// Generic을 사용해서 타입이 깨지지 않도록 한다
// <T> 안에 타입 이름을 넣으며, 파라미터로 넣은 값의 타입을 활용할 수 있다
// 즉, 제네릭을 사용하면 파라미터로 다양한 타입을 넣을 수 있고, 타입 지원도 유지됨
function newMerge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}
const newMerged = newMerge({ foo: 2 }, { bar: 2 });

// Example 1 ====================================== //
function wrap<T>(param: T) {
  return {
    param
  };
}

const wrapped = wrap(10);
wrapped = "hey"; // type이 number로 유지된다

// Example 2 ====================================== //

interface Items<T> {
  list: T[];
}
const items: Items<string> = {
  // 숫자든 문자든 객체든 하나의 interface 만을 사용해 타입을 설정 가능
  list: ["a", "b", "c"]
};

// Example 3 ====================================== //
type Items2<T> = {
  list: T[];
};

const items2: Items2<string> = {
  list: ["a", "b", "c"]
};

// Example 4 ====================================== //

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

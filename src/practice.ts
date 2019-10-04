let count = 0;
count += 1;
// error!
//  count = "갑자기 분위기 문자열";

const message: string = "hello world";
const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];

// error!
// message.put(1);

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: "red" | "orange" | "yellow" = "red"; // 디폴트값은 red
console.log(color);
color = "yellow"; // 있는거면 오케이
// color = "green"; // 없는거는 불가!

// let x: [string, number]
//
// x = ['hello', 10]
//
// x[3] = "world"; //这里和老师讲的有出入，应该是新版修改了，变得更严谨


// enum Color {
//   Red = 1,
//   Green,
//   Blue,
// }
// let colorName: string = Color[2];
//
// console.log(colorName);

// 类型断言
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length

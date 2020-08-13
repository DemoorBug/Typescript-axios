interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  [x: number]: Dog;
  [x: string]: Dog;
}

let firsName: number[] = [1, 2, 3]

// function as (names: Dog) {
//   return names
// }
//
// as({name: 'sd', breed: 'helo'})

class Animal {
  name: string;
  constructor(nam: string) {
    this.name = nam
  }
  run() {
    return `${this.name} is runing`
  }
}

// 实例化
const snake = new Animal('snake')
snake.run()

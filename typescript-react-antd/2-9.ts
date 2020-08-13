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

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}

const xiaobao = new Dog('xiaobao')

class Cat extends Animal {
  constructor (name: string) {
    super(name)
    console.log(this.name);
  }
  run () {
    return 'Meow, ' + super.run()
  }
}

const maomao = new Cat('maomao')
console.log(maomao.run());

function ls(s: number | string) {
  // s.length 这样会报错，因为联合类型number没有length
  //(s as string).length
  //这样就ok了
}

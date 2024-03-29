interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string;
}


interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name);
    } else {
      console.log('Hi!');
    }
  }
}

let user1: Person;
user1 = new Person();
user1.greet('Hello I am');

// const userInputElement = <HTMLInputElement>document.getElementById("input-element")!;
// const userInputElement = document.getElementById("input-element")! as HTMLInputElement;
const userInputElement = document.getElementById("input-element");
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'こんにちは';
}

interface ErrorContainer { // { email: '正しいメールアドレスではありません。', username: 'ユーザ名に記号を含めることはできません。'}
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: '正しいメールアドレスではありません。',
  username: 'ユーザ名に記号を含めることはできません。'
}
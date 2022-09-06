"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    }
}
let user1;
user1 = new Person();
user1.greet('Hello I am');
// const userInputElement = <HTMLInputElement>document.getElementById("input-element")!;
// const userInputElement = document.getElementById("input-element")! as HTMLInputElement;
const userInputElement = document.getElementById("input-element");
if (userInputElement) {
    userInputElement.value = 'こんにちは';
}

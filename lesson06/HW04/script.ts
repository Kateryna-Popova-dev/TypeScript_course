//1
function isString(param: string | number): param is string {
    return typeof param === 'string';
}

function test(param: string | number): string | number {
    if (isString(param)) {
        return param;
    }
    return param;
}

//2
let array = ['test0', 20, 'test01', 30, 40, 'test02', 'test03'];

function arrayFilter(array: any[]): string[] {
    return array.filter(item => isString(item));
}

console.log(arrayFilter(array));

//3
class User {
    _name: string;
    _age: number;
    isOnline: boolean;

    constructor(name: string, age: number, isOnline: boolean) {
        this._name = name;
        this._age = age;
        this.isOnline = isOnline;
    }
}

function isBoolean(isOnline: any): isOnline is boolean {
    return typeof isOnline === 'boolean';
}

function userIsOnline(person: any): boolean | undefined {
    let value = person.hasOwnProperty('isOnline');
    if (value && isBoolean(person.isOnline)) {
        return person.isOnline;
    }
    return undefined;
}

console.log(userIsOnline(new User("Kate", 24, true)));

//4
class Dog {
    run(): void {
    }
}

class Bird {
    fly(): void {
    }
}

class Fish {
    swim(): void {
    }
}

function isDog(pet: unknown): pet is Dog {
    return pet instanceof Dog;
}

function isBird(pet: unknown): pet is Bird {
    return pet instanceof Bird;
}

function isFish(pet: unknown): pet is Fish {
    return pet instanceof Fish;
}

function animal(pet: Cat | Bird | Fish): object {
    if (isDog(pet)) {
        return pet
    }
    if (isBird(pet)) {
        return pet
    }
    return pet
}

console.log(animal(new Fish));

//5
function performsOperation(param: string | number): string | string[] {
    return typeof param === 'string' ? param.split('') : param.toFixed(2);
}

let number = 5.2473573;
console.log(performsOperation(number));

//6
function isFunction(param: unknown): param is () => {} {
    return typeof param === 'function' ?? false;
}

function operation(param: number | (() => string)) {
    if (isFunction(param)) {
        return param();
    }
}

function getOne(): string {
    return '1';
}

console.log(operation(getOne))

//7
enum AnimalTypeEnum {
    CAT = 'cat',
    DUCK = 'duck',
    ALLIGATOR = 'alligator',
}

class Animal {
    type!: string;
}

class Cat extends Animal {
    type: AnimalTypeEnum.CAT = AnimalTypeEnum.CAT;

    run(): void {
    }
}

class Duck extends Animal {
    type: AnimalTypeEnum.DUCK = AnimalTypeEnum.DUCK;

    fly() {
    }
}

class Alligator extends Animal {
    type: AnimalTypeEnum.ALLIGATOR = AnimalTypeEnum.ALLIGATOR;

    swim() {
    }
}

function move(pet: Cat | Duck | Alligator): void {
    if (pet.type === AnimalTypeEnum.CAT) {
        pet.run()
    }
    if (pet.type === AnimalTypeEnum.DUCK) {
        pet.fly()
    }
    if (pet.type === AnimalTypeEnum.ALLIGATOR) {
        pet.swim();
    }
}


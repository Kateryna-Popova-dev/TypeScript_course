import {TypeOfAnimal, TypeOfHealth} from "./enums";

interface IAnimal {
    _id: number;
    name: string;
    typeOfAnimal: TypeOfAnimal;
    age: number,
    health: TypeOfHealth;
    weight: number | undefined,
    height: number | undefined,
    length: number | undefined
}

export class Animal implements IAnimal {
    _id: number;
    age: number;
    health: TypeOfHealth;
    name: string;
    typeOfAnimal: TypeOfAnimal;
    height: number | undefined;
    length: number | undefined;
    weight: number | undefined;

    constructor(typeOfAnimal: TypeOfAnimal, name: string, health: TypeOfHealth, age: number,) {
        this.age = age;
        this.health = health;
        this.name = name;
        this.typeOfAnimal = typeOfAnimal;
        this._id = Math.floor(100000 + Math.random() * 900000);
    }

    getParametersAnimal(animal: Animal): object {
        return {
            'height': animal.height,
            'length': animal.length,
            'weight': animal.weight,
        }
    }
}

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
    private _height: number | undefined;
    private _length: number | undefined;
    private _weight: number | undefined;

    constructor(typeOfAnimal: TypeOfAnimal, name: string, health: TypeOfHealth, age: number,) {
        this.age = age;
        this.health = health;
        this.name = name;
        this.typeOfAnimal = typeOfAnimal;
        this._id = Math.floor(100000 + Math.random() * 900000);
    }

    getParametersAnimal(): object {
        return {
            'height': this._height,
            'length': this._length,
            'weight': this._weight,
        }
    }

    set height(value: number) {
        this._height = value;
    }

    set length(value: number) {
        this._length = value;
    }

    set weight(value: number) {
        this._weight = value;
    }

}

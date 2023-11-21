import {Animal} from "../Animal";
import {TypeOfAnimal, TypeOfHealth} from "../enums";

describe('Person case', () => {
    let animal: Animal;
    beforeEach(() => {
        animal = new Animal(TypeOfAnimal.LION, 'Simba', TypeOfHealth.AMAZING, 2);

    });
    it('animal created', () => {
        expect(animal).toBeInstanceOf(Animal);
    });
    it('this animal has my desired properties', () => {
        expect(animal).toHaveProperty('_id');
        expect(animal).toHaveProperty('age');
        expect(animal).toHaveProperty('health');
        expect(animal).toHaveProperty('name');
        expect(animal).toHaveProperty('typeOfAnimal');
    });

    it('check that the letter reached the clients', () => {
        let weight = animal.weight = 500;
        let length = animal.length = 1.5;
        let height = animal.height = 1;
        expect(animal.getParametersAnimal()).toEqual({height, length, weight});
    });

});
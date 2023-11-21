import {Person} from "../Person";

describe('Person case', () => {

    const firstName = 'John';
    const lastName = 'Dow';
    const DOB = '11/12/1998';
    const tel = '+30508106575';
    const email = "test@mail.com";
    let p: Person;
    let p2: Person;

    beforeEach(() => {
        p = new Person(firstName, lastName, DOB, tel, email);
        p2 = new Person(firstName, lastName);
    })


    it('Person created with all attributes', () => {
        expect(p).toBeInstanceOf(Person);
    })


    it('Person created without email', () => {
        const p1 = new Person(firstName, lastName, '11/12/1998', '+30508106575');
        expect(p1).toBeInstanceOf(Person);
    })
    it('Person created without email and tel', () => {
        const p1 = new Person(firstName, lastName, '11/12/1998');
        expect(p1).toBeInstanceOf(Person);
    })
    it('Person created without email and tel and DOB', () => {
        const p1 = new Person(firstName, lastName);
        expect(p1).toBeInstanceOf(Person);
    })

    it('Name assigned', () => {
        expect(p.fullName).toBe(`${firstName} ${lastName}`);
    })

    it('Correct age', () => {

        const difMs = Date.now() - (new Date(String(p._dateOfBirth))).getTime();
        const ageDate = new Date(difMs)
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);

        expect(p.age).toBe(age);
    })

    it('Test age setter', () => {
        p2.dateOfBirth = '11/12/1998';

        expect(p2.age).not.toBeUndefined();
    })


})
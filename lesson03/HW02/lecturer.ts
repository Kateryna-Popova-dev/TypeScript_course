import {Position, Course} from './enums';
import Contacts from "./contacts";

class Lecturer {
    // Name, surname, position, company, experience, courses, contacts
    private _name: string;
    private _surname: string;
    private _position: Position;
    private _company: string;
    private _experience: number;
    private _courses: Course[];
    private _contacts: Contacts;

    constructor(name: string, surname: string, experience: number, courses: Course[], contacts: Contacts) {
        this._name = name;
        this._surname = surname;
        this._position = Position.unknown
        this._company = 'unknown';
        this._experience = experience;
        this._courses = courses;
        this._contacts = contacts;
    }

    set position(position: Position) {
        this._position = position;
    }

    set company(company: string) {
        this._company = company;
    }

    get position(): Position {
        return this._position;
    }

    get company(): string | undefined {
        return this._company;
    }

    get courses(): Course[] {
        return this._courses;
    }

    get contacts(): Contacts {
        return this._contacts;
    }

    addCourse(course: Course) {
        this._courses.push(course);
    }
}

export default Lecturer;
import SubjectGrade from './subjectGrade';
import Visit from './visit';

class Student {

    _firstName: string;
    _lastName: string;
    _birthYear: number;
    _grades: SubjectGrade[] = [];
    _visits: Visit[] = [];

    constructor(firstName: string, lastName: string, birthYear: number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._birthYear = birthYear;
    }

    get fullName() {
        return `${this._lastName} ${this._firstName}`;
    }

    set fullName(value) {
        [this._lastName, this._firstName] = value.split(' ');
    }

    get age() {
        return new Date().getFullYear() - this._birthYear;
    }

    set grades(subjectGrade: SubjectGrade) {
        this._grades.push(subjectGrade);
    }

    set visit(visit: Visit) {
        this._visits.push(visit);
    }

    getPerformanceRating(): number {
        const gradeValues: number[] = this._grades.map(i => +i._grade)

        if (!gradeValues.length) return 0;

        const averageGrade: number = gradeValues.reduce((sum, grade) => sum + grade, 0) / gradeValues.length;
        const attendancePercentage: number = (this._visits.filter(item => item._isPresent).length / this._visits.length) * 100;
        return +((averageGrade + attendancePercentage) / 2).toFixed(2);
    }
}

export default Student;

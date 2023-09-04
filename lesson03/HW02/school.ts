import Area from './area';
import Lecturer from './lecturer';

class School {

    _areas: Area[] = [];
    _lecturers: Lecturer[] = [];

    get areas(): Area[] {
        return this._areas;
    }

    get lecturers(): any[] {
        return this._lecturers;
    }

    addArea(area: Area): void {
        this._areas.push(area);
    }

    removeArea(area: Area): void {
        let index: number = this._areas.indexOf(area);
        if (index >= 0) {
            this._areas.splice(index, 1);
        }
    }

    addLecturer(lecturer: Lecturer): void {
        this.lecturers.push(lecturer);
    }

    removeLecturer(lecturer: Lecturer): void {
        let index = this._lecturers.indexOf(lecturer);
        if (index >= 0) {
            this._lecturers.splice(index, 1);
        }
    }
}

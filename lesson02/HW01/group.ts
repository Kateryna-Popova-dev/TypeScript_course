class Group {
    _students: any[] = [];
    directionName: string;
    levelName: string;

    get students(): any[] {
        return this._students;
    }

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    addStudent(student: any): void {
        this._students.push(student);
    }

    showPerformance(): any[] {
        return [...this.students].sort(
            (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
        );
    }
}

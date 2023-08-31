class Level {
    groups: any[] = [];
    _name: string;
    _program: string;

    constructor(name: string, program: string) {
        this._name = name;
        this._program = program;
    }

    get name(): string {
        return this._name;
    }

    get program(): string {
        return this._program;
    }

    addGroup(group: any): void {
        this.groups.push(group);
    }
}
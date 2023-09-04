import Group from "./group";

class Level {

    _name: string;
    _description: string;
    _groups: Group[] = [];

    constructor(name: string, description: string) {
        this._name = name;
        this._description = description;
    }

    get name(): string {
        return this._name;
    }
    get description(): string {
        return this._description;
    }

    get groups(): Group[] {
        return this._groups;
    }
    addGroup(group: Group): void{
        this._groups.push(group);
    }
    removeGroup(group: Group){
        let index = this._groups.indexOf(group);
        if (index >= 0){
            this._groups.splice(index, 1);
        }
    }
}
export default Level;

//1
interface IUser {
    [key: string | number]: string | number;
}

//2
type fnType = (param: any) => string;

interface IAdmin {
    [key: string]: fnType;
}

//3
interface IMonth {
    [key: number]: string;
}

let mounts: IMonth = {1: 'January', 2: 'February', 3: 'March'};
console.log(mounts);

//4
interface IPerson {
    name: string;

    [key: string | number]: string | number | fnType;

}

let person: IPerson = {name: 'Kate', 'age': 24};

//5
type fnType2 = () => string;


interface IAnimal {
    [key: number]: fnType2;
}

interface ICat extends IAnimal {
    tailLength: number,
    meaoingIndex: number,
}

let cat: ICat = {
    111: (): string => 'jump',
    123: (): string => 'run',
    tailLength: 42,
    meaoingIndex: 12,
}
console.log('cat', cat.meaoingIndex)
console.log('cat', cat[111]());

//6
function checkIndex(obj: IMonth): boolean {
    return !(Object.keys(obj).filter(i => typeof i !== 'number').length > 0);
}

console.log(checkIndex(mounts));



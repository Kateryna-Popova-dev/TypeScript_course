let arrayNum = [5, 3, 7, 9, 11, 5, 2];

type arrayType<T> = T[];
type filter = (el: number | string) => number | string | undefined;

function filterArray<T extends arrayType<string | number>, U extends number | string>(array: T, condition: filter): T | undefined {
    let newArray: any = [];
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray as T;
}

function condition(el: number | string): number | string | undefined {
    if (el === 2) return el;
}

let array = filterArray<number[], number>(arrayNum, (el) => {
    if (el === 5) return el
});
console.log('array', array)
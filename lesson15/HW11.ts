const palindrome = (number: number, counter: number = 0): { result: number, steps: number } | false => {
    try {
        return number === Number(String(number).split('').reverse().join(''))
            ? {result: number, steps: counter,}
            : palindrome(number + Number(String(number).split('').reverse().join('')), ++counter);
    } catch (e) {
        return false;
    }
}


console.log(palindrome(334));

type Char = string | number;

const permuteFunc = (inputArr: Char[]): Char[][] => {
    let result: Char[][] = [];

    const permute = (arr: Char[], m: Char[] = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }
    permute(inputArr)
    return result;
}

console.log(permuteFunc([1, 2, 'OOO!', 4]));
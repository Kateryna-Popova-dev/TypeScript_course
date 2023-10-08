type ReturnFuncType<T> = T extends (...args: any) => infer R ? R : any;
type ReturnParamAndFuncType<T> = T extends (param: infer U, ...args: any) => infer R ? [R, U] : undefined;


function test(a: number): string {
    return String(a);
}

let a: ReturnFuncType<typeof test> = '42';  // number
let b: ReturnParamAndFuncType<typeof test> = ['str', 42]; // number

//1
type DeepReadonly<T> = {
    readonly [P in keyof T]: DeepReadonly<T[P]>;
}
//2

type DeepRequireReadonly<T> = {
    readonly [P in keyof T]-?: DeepReadonly<T[P]>;
}

//3
type UpperCaseKeys<T> = {
    [K in keyof T & string as Capitalize<K>]?: T[K];
}

//4
type ObjectToPropertyDescriptor<T> = {
    [K in keyof T]?: {
        value: T[K],
        writable: boolean,
        enumerable: boolean,
        configurable: boolean
    };
}



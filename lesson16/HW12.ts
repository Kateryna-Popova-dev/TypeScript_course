function DeprecatedMethod<Y extends {reason: string, replacementMethod?: string}>(reason: Y){
   return function <T, A extends any[], R>(
        originalMethod: (this:T, ...args: A)=> R,
        context: ClassMethodDecoratorContext<T, (this: T, ...args: A)=> R>
    ){
        if(context.kind !== 'method') throw new Error('Method-only decorator');

        function replacementMethod(this: T, ...args: A) : R{
            console.log(`${String(context.name)} not recommended for use, because ${reason.reason}`);

            if (reason.replacementMethod){
                console.log(`${String(context.name)} can be replaced by ${reason.replacementMethod}`);
            }
            return originalMethod.apply(this, args);
        }
        return replacementMethod;
    }
}

class Reason{
    constructor(public reason: string, public replacementMethod?: string) {
    }
}
let reason = new Reason('method is deprecated', 'anythink');
class User{

    fullName: string;
    constructor(private name: string, private age: number, fullName: string) {
        this.fullName = fullName;
    }
    @DeprecatedMethod(reason)
    getFullYear(): number{
     return new Date().getFullYear()-this.age;
    }
}
let user1 = new User('Kate', 24, 'Kate Popova');
console.log(user1.getFullYear());
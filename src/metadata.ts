import 'reflect-metadata';

const example = () => (targetClass: any) => {
    const types = Reflect.getMetadata('design:paramtypes', targetClass);
    console.log(types);
    return targetClass;
};

const example2 = (desc: string) => (targetClass: any) => {
    const types = Reflect.getMetadata('design:paramtypes', targetClass);
    console.log(types);
    return targetClass;
};

@Reflect.metadata('inClass', 'This is class description')
@example()
class Person {
    constructor(name: string, age: number) {
    }
}

@example()
class Cat {
    constructor(lazy: Boolean, hair: string) {
    }

    @Reflect.metadata('inMethod', 'This is method description')
    say(){}
}

new Person('Kenny 田', 61);
console.log(Reflect.getMetadata('inClass', Person));
console.log(Reflect.getMetadata('inMethod', new Cat(true, 'gray'), 'say'));
console.log(new Cat(false, 'white'));
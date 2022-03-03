// ------------------type------------------

type userName = string; // -> basic type
type userId = string | number; // -> union type
type arr = number[]; // -> array type
type Gender = 'male' | 'female' | 'unknown';

// object type
type Stuff = {
    id: userId;
    name: userName;
    age: number;
    gender: Gender;
    isWebDev: boolean;
}

type Tree<T> = { value: T };

const user: Stuff = {
    id: '923',
    name: '校长助理',
    age: 32,
    gender: 'female',
    isWebDev: false
};

type Pet = 'cat' | 'dog';
let pet: Pet;

pet = 'cat';
pet = 'dog';

// pet = 'zebra' // Compiler error

// ------------------typeof------------------
interface Person {
    name: string;
    age: number;
}

const sem: Person = {name: 'sem', age: 30};
type Sem = typeof sem; // -> Person
console.log(sem);

function toArray(x: number): Array<number> {
    return [x];
}

type Func = typeof toArray; // -> (x:number) => number[]

// ------------------keyof------------------
type k1 = keyof Person; // -> name | age
type k2 = keyof Person[] // -> length | toString | pop | push | concat | ...
type k3 = keyof { [x: string]: Person };

// ------------------in------------------
type Keys = 'a' | 'b' | 'c';
type Obj = { [p in Keys]: any }; // -> {a: any, b: any, c: any}

// ------------------infer------------------
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// ------------------extends------------------
interface ILengthwise {
    length: number;
}

function loggingIdentity<T extends ILengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity({length: 10, value: 3});

// ------------------partial------------------
interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return {...todo, ...fieldsToUpdate};
}

const todo1 = {title: 'organize desk', description: 'clear clutter'};

const todo2 = updateTodo(todo1, {description: 'throw out trash'});
console.log('todo2===', todo2);

interface Props {
    a?: number;
    b?: string;
}

// ------------------Required------------------
const obj: Props = {a: 5};
const obj2: Required<Props> = {a: 3, b: 'hello'};

interface Props2 {
    a: number;
    b: string;
}

const obj3: Props2 = {a: 3, b: 'hi'};
const obj4: Partial<Props2> = {b: 'world'};

// ------------------Required------------------







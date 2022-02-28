// v1
const person = {name: 'Kenny田'}

const addAge = (age: number) => ({name}: { name: string }) => ({name, age});

const newPerson = addAge(30)(person);

console.log(person);
console.log(newPerson);

// v2
const addAge2 = (age: number) => (targetClass: any) => class {
    name = new targetClass().name;
    age = age;
}

@addAge2(40)
class Person {
    name = "洛托姆"
}

const person2 = new Person();
console.log(person2);


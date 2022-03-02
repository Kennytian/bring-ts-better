// incorrect code
// function f(a: string | number, b: string | number) {
//     if (typeof a === 'string') {
//         return `${a}:${b}`;
//     }
//     return a + b;
// }

// f(2, 3); // Ok
// f(1, 'a'); // Error
// f('a', 2); // Error
// f('a', 'b'); // Ok

// correct code
function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: number | string, b: number | string) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a + ':' + b;
    }
    return a + b;
}

f(2, 3); // Ok
// f(1, 'a'); // Error
// f('a', 2); // Error
f('a', 'b'); // Ok
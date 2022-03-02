type User = { id: number, kind: string }

// incorrect code
// function makeCustomer<T extends User>(u: T): T {
//     return {
//         id: u.id,
//         kind: u.kind
//     }
// }

// correct code
function makeCustomer1<T extends User>(u: T): T {
    return {
        ...u,
        id: u.id,
        kind: u.kind
    }
}

// correct code
function makeCustomer2<T extends User>(u: T) {
    return {
        id: u.id,
        kind: u.kind
    }
}

// correct code
function makeCustomer3<T extends User>(u: T): User {
    return {
        id: u.id,
        kind: u.kind
    }
}
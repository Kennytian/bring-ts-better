type Diesel = { type: 'petroleum' | 'bio' | 'synthetic' }
type Gasoline = { type: 'hybrid' | 'conventional' }
type Bus = { engine: Diesel }
type Car = { engine: Gasoline }
type Bicycle = { power: 'limbs' }

type Engine<T> = T extends { engine: unknown } ? T['engine'] : never;
type BusEngine = Engine<Bus>;
type NoEngine = Engine<Bicycle>;

const busEngine: BusEngine = {
    type: 'bio'
}
const carEngine: Engine<Car> = {
    type: 'hybrid'
}
// const noEngine: NoEngine = {type: 'limbs'}

// const invalid: Engine<Car> = {
//     type: 'bio' // error here
// }

enum Priority {
    mustHave = 'Must Have',
    shouldHave = 'Should Have',
    couldHave = 'Could Have',
    wontHave = `Won't Have`,
}

const backlog = {
    releases: [{
        name: 'Sprint 1',
        epics: [{
            name: 'Account Management',
            tasks: [
                {name: 'Single Sign Out', priority: Priority.mustHave},
                {name: 'Email Notification', priority: Priority.mustHave},
            ]
        }]
    }]
};

type Unarray<T> = T extends Array<infer U> ? U : T;
type Release = Unarray<typeof backlog['releases']>;
type Epic = Unarray<Release['epics']>;

export const releases: Unarray<typeof backlog['releases']> = {
    name: 'Sprint 1',
    epics: [{
        name: 'Account Management',
        tasks: [
            {name: 'Single Sign Out', priority: Priority.mustHave},
            {name: 'Email Notification', priority: Priority.mustHave},
        ]
    }]
};

export const epic: Epic = {
    name: 'Account Management',
    tasks: [
        {name: 'Single Sign Out', priority: Priority.mustHave},
        {name: 'Email Notification', priority: Priority.mustHave},
    ]
};
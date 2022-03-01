type Trip = |
    { origin: { uuid: string; city: string; state: string; }; } |
    { originUuid: string };

// 拔出 originUuid
type TripWithOriginRef = Extract<Trip, { originUuid: string }>;

// 拔出 origin 对象
type TripWithOriginWhole = Extract<Trip, { origin: { uuid: string } }>;

const tripOriginRef: TripWithOriginRef = {originUuid: '23afd23'};

const tripOriginWhole: TripWithOriginWhole = {origin: {uuid: '2324adf', city: 'Denver', state: 'Colorado'}};

const hasOriginRef = (trip: Trip): trip is TripWithOriginRef => "originUuid" in trip;
const isDraft = (trip:Trip): trip is TripWithOriginWhole => 'origin' in trip;

const result = [tripOriginRef, tripOriginWhole].filter(hasOriginRef);

console.log('result==', result);

console.log('tripOriginRef==', tripOriginRef);
console.log('tripOriginWhole==', tripOriginWhole);
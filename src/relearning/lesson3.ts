type Foo = {
    a: number;
    b?: string;
    c: boolean
}

type SetOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type SetOptional2<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;

type SomeOptional = SetOptional<Foo, 'a' | 'b'>;
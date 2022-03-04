interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false
}

interface Example {
    a: string;
    b: string | number;
    c: () => void;
    d: {}
}

type ConditionalPick<V, T> = {
    [K in keyof V as V[K] extends T ? K : never]: V[K];
};

type StringKeysOnly = ConditionalPick<Example, string>;

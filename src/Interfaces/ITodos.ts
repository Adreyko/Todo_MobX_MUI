export interface ITodo {
    id: string
    completed: boolean
    text: string
}


export interface ITodos {
    todos: ITodo[],
}
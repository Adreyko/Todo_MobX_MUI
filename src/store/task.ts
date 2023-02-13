import { action, makeAutoObservable, observable } from "mobx";
import { create, persist } from "mobx-persist";
import { ITodo, ITodos } from "../Interfaces/ITodos";

class Todo {
    @observable  @persist('list') todos: ITodo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    
    @action
    addTodo(todo: ITodo) {
        this.todos.unshift(todo);
    }

    
    @action
    removeTodo(id: string) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }


    @action
    completedTodo(id: string) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
    }

    
    @action
    removeAllTodo() {
        this.todos = [];
    }
}

const hydrate = create({
    storage: localStorage,
    jsonify: true,
});

const task = new Todo();

hydrate("todos", task).then(() => {
    console.log("Todos hydrated");
});

export default task;
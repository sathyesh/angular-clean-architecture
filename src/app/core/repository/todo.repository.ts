import {ToDo} from '../entity';

export abstract class TodoRepository {
    public abstract getAllToDos(): Promise<ToDo[]>;

    public abstract createToDo(todo: ToDo): Promise<ToDo>;

    public abstract editToDo(id: number, todo: ToDo): Promise<ToDo>;

    public abstract deleteToDo(id: number): Promise<void>;
}

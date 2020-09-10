import {Injectable} from '@angular/core';
import {TodoRepository} from '../../core/repository';
import {ToDo} from '../../core/entity';

@Injectable({
  providedIn: 'root'
})
export class TodoRepositoryService extends TodoRepository {

  private toDos: ToDo[] = [];

  public async createToDo(todo: ToDo): Promise<ToDo> {
    this.toDos.push(todo);
    return this.toDos[this.toDos.length - 1];
  }

  public async deleteToDo(id: number): Promise<void> {
    if (this.toDos[id] === null) {
      throw new Error('Diese Aufgabe existiert nicht.');
    }

    this.toDos.splice(id, 1);

    return;
  }

  public async editToDo(id: number, todo: ToDo): Promise<ToDo> {
    if (this.toDos[id] === null) {
      throw new Error('Diese Aufgabe existiert nicht.');
    }

    this.toDos[id] = todo;
    return this.toDos[id];
  }

  public async getAllToDos(): Promise<ToDo[]> {
    return this.toDos;
  }
}

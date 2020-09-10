import {ShowToDoListPresenter} from '../../core/use-case';
import {TodoListViewModel} from './todo-list.view-model';
import {ToDo} from '../../core/entity';
import { Injectable } from "@angular/core";

@Injectable()
export class TodoListPresenter extends ShowToDoListPresenter<TodoListViewModel> {

  constructor() {
    super(TodoListViewModel);
  }

  public displayToDos(toDos: ToDo[]): void {
    this.viewModel.toDos = toDos;
  }
}

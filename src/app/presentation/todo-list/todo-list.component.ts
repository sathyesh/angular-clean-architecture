import {Component} from '@angular/core';
import {
  AddToDoUseCase,
  DeleteToDoUseCase,
  EditToDoUseCase,
  ShowToDoListPresenter,
  ShowToDoListUseCase
} from '../../core/use-case';
import {TodoListViewModel} from './todo-list.view-model';
import {ToDo} from '../../core/entity';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private readonly useCase: ShowToDoListUseCase,
              public readonly presenter: ShowToDoListPresenter<TodoListViewModel>,
              private readonly addToDoUseCase: AddToDoUseCase,
              private readonly editToDoUseCase: EditToDoUseCase,
              private readonly deleteToDoUseCase: DeleteToDoUseCase,
  ) {
    presenter.reset();

    useCase.execute();
  }

  public addToDo() {
    this.addToDoUseCase.execute();
  }

  public setToDoState(id: number, todo: ToDo) {
    this.editToDoUseCase.execute({id, todo, onlyToggleDone: true})
  }

  public editToDo(id: number, todo: ToDo) {
    this.editToDoUseCase.execute({id, todo, onlyToggleDone: false})
  }

  public deleteToDo(id: number) {
    this.deleteToDoUseCase.execute(id);
  }
}

import {IUseCase, Presenter} from '../arch';
import {ToDo} from '../entity';
import {TodoRepository} from '../repository';
import {Injectable} from '@angular/core';

export abstract class ShowToDoListPresenter<T> extends Presenter<T> {
  public abstract displayToDos(toDos: ToDo[]): void;
}

@Injectable({providedIn: 'root'})
export class ShowToDoListUseCase implements IUseCase<void, ShowToDoListPresenter<any>> {

  constructor(public readonly presenter: ShowToDoListPresenter<any>,
              private readonly repository: TodoRepository,
  ) {
  }

  public async execute(request: void): Promise<void> {
    try {
      const allToDos = await this.repository.getAllToDos();
      this.presenter.displayToDos(allToDos);
    } catch (e) {
      console.error('Failed to load or present to dos: %o', e);
      throw e;
    }
  }
}

import {IUseCase} from '../arch';
import {ShowToDoListUseCase} from './show-to-do-list.use-case';
import {InteractionService} from '../service';
import {TodoRepository} from '../repository';
import {ToDo} from '../entity';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AddToDoUseCase implements IUseCase<void, void> {
  public readonly presenter: void;

  constructor(private readonly interaction: InteractionService,
              private readonly repository: TodoRepository,
              private readonly listUseCase: ShowToDoListUseCase,
  ) {
  }

  public async execute(request: void): Promise<void> {

    try {
      const description = await this.interaction.enterString();
      if (description == null || description.trim() === '') {
        return;
      }

      const todo = new ToDo(description);
      await this.repository.createToDo(todo);

      await this.listUseCase.execute();
    } catch (e) {
      console.error('Failed to create a todo: %o', e);
      throw e;
    }

  }
}

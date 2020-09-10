import {IUseCase} from '../arch';
import {ToDo} from '../entity';
import {InteractionService} from '../service';
import {TodoRepository} from '../repository';
import {ShowToDoListUseCase} from './show-to-do-list.use-case';
import {Injectable} from '@angular/core';

export class EditToDoRequest {

    constructor(public readonly id: number,
                public readonly todo: ToDo,
                public readonly onlyToggleDone: boolean = false,
    ) {
    }
}

@Injectable({providedIn: 'root'})
export class EditToDoUseCase implements IUseCase<EditToDoRequest, void> {
    readonly presenter: void;

    constructor(private readonly interaction: InteractionService,
                private readonly repository: TodoRepository,
                private readonly listUseCase: ShowToDoListUseCase,
    ) {
    }

    public async execute(request: EditToDoRequest): Promise<void> {
        try {
            const todo = new ToDo(request.todo.description, request.todo.isDone);
            if (request.onlyToggleDone) {
                todo.isDone = !todo.isDone;
            } else {
                do {
                    todo.description = await this.interaction.enterString(todo.description);
                    if (todo.description == null) {
                        return;
                    }
                } while (todo.description.trim() == '')
            }

            await this.repository.editToDo(request.id, todo);

            await this.listUseCase.execute();
        } catch (e) {
            console.error('Failed to edit a todo: %o', e);
            throw e;
        }
    }
}

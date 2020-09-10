import {IUseCase} from '../arch';
import {InteractionService} from '../service';
import {TodoRepository} from '../repository';
import {ShowToDoListUseCase} from './show-to-do-list.use-case';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DeleteToDoUseCase implements IUseCase<number, void> {
    readonly presenter: void;

    constructor(private readonly interaction: InteractionService,
                private readonly repository: TodoRepository,
                private readonly listUseCase: ShowToDoListUseCase,
    ) {
    }

    public async execute(id: number): Promise<void> {
        try {
            if (!await this.interaction.confirm('Soll die Aufgabe gelöscht werden?')) {
                return;
            }

            await this.repository.deleteToDo(id);

            await this.listUseCase.execute();
        } catch (e) {
            console.error('Failed to delete a todo: %o', e);
            throw e;
        }
    }

}

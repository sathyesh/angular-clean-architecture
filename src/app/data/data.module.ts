import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoRepository} from '../core/repository';
import {TodoRepositoryService} from './repository/todo-repository.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: TodoRepository, useClass: TodoRepositoryService}
  ]
})
export class DataModule {
}

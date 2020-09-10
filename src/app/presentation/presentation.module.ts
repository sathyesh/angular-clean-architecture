import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {ShowToDoListPresenter} from '../core/use-case';
import {TodoListPresenter} from './todo-list/todo-list.presenter';

@NgModule({
  declarations: [
    TodoListComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TodoListComponent,
  ],
  providers: [
    {provide: ShowToDoListPresenter, useClass: TodoListPresenter}
  ]
})
export class PresentationModule {
}

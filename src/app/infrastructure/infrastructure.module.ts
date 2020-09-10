import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InteractionService} from './service/interaction.service';
import * as CoreService from '../core/service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: CoreService.InteractionService, useClass: InteractionService},
  ]
})

export class InfrastructureModule {
}

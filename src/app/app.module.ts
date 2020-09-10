import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PresentationModule} from './presentation/presentation.module';
import {DataModule} from './data/data.module';
import {InfrastructureModule} from './infrastructure/infrastructure.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DataModule,
    PresentationModule,
    InfrastructureModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { NgGreetComponent } from './components';

@NgModule({
  providers: [
  ],
  declarations: [
    NgGreetComponent,
  ],
  exports: [
    NgGreetComponent,
  ]
})
export class NgGreetModule {
}
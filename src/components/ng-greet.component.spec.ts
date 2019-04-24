import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { NgGreetComponent } from "./ng-greet.component";

describe('NgGreetComponent', () => {
  let componentFixture: ComponentFixture<NgGreetComponent>;
  let componentInstance: NgGreetComponent;

  // Asynchronous beforeEach.
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
      }).compileComponents().then(() => { /* Don't do anything */ });
    })
  );

  // Synchronous BeforeEach.
  beforeEach(() => {
    componentFixture = TestBed.createComponent(NgGreetComponent);
    componentInstance = componentFixture.componentInstance;
  });
  
});

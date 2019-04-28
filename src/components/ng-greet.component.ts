import { Component, Input } from '@angular/core';

@Component({
  selector: 'ng-greet',
  styleUrls: ['./ng-greet.component.css'],
  templateUrl: './ng-greet.component.html',
})

export class NgGreetComponent {

  @Input('greetDate')
  greetDate: Date;

  public greetMessage: string;

  ngOnInit() {
    if (this.greetDate) {
      console.log("greetDate=>", this.greetDate);
      let grHours = this.greetDate.getHours();
      if (grHours > 0 && grHours < 12) {
        this.greetMessage = "Good morning";
      } else if (grHours > 12 && grHours < 18) {
        this.greetMessage = "Good afternoon";
      } else {
        this.greetMessage = "Good evening";
      }
    }
  }

}

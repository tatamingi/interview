import { Component, VERSION } from '@angular/core';

interface User {
  name: string;
  age: number;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  user: User;
}

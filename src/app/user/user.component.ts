import { Component, VERSION, Input, OnChanges, SimpleChanges } from '@angular/core';

interface User {
  name: string;
  age: number;
};

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: [ './user.component.less' ]
})
export class UserComponent implements OnChanges {
  @Input() user: User;
  changeLog = [];

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}previousValue = ${prev}`);
    }
  }
}
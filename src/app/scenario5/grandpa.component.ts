import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ParentchildComponent } from './parentchild.component';





@Component({
    selector: 'app-grandpa',
    template: `
    <h3>Scenario-five</h3>
    Message {{message}}
       <app-parentchildmsg>
    </app-parentchildmsg>
  `
})

export class GrandpaComponent implements AfterViewInit {
  @ViewChild(ParentchildComponent) child;
  constructor() { }
  message: string;
  ngAfterViewInit() {
    this.message = this.child.message;
    }
}

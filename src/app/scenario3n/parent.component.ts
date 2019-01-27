import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    template: `
    <app-scenario3n [childMessage]='parentMessage'>
    </app-scenario3n>
  `
})

export class ParentComponent {
 parentMessage = 'message from parent';
  constructor() { }
}
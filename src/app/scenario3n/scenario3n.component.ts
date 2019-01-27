import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-scenario3n',
  templateUrl: './scenario3n.component.html',
  styleUrls: ['./scenario3n.component.css']
})
export class Scenario3nComponent implements OnInit {

  @Input() childMessage: string;
  
  constructor() { }

  ngOnInit() {
  }

}

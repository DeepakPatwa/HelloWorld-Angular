import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-scenario1',
  templateUrl: './scenario1.component.html',
  styleUrls: ['./scenario1.component.css']
})
export class Scenario1Component implements OnInit {

  constructor() { }

  name=new FormControl('');
  ngOnInit() {
  }

  display()
  {
    console.log(this.name.value)
  }

}

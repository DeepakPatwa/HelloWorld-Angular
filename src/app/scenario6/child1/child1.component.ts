import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../../appservice.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  message1:string;

  constructor(private data: AppserviceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message1 => this.message1 = message1)
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }

}

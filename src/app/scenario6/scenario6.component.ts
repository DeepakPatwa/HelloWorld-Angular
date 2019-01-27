import { Component, OnInit } from '@angular/core';
import { AppserviceService } from '../appservice.service';

@Component({
  selector: 'app-scenario6',
  templateUrl: './scenario6.component.html',
  styleUrls: ['./scenario6.component.css']
})
export class Scenario6Component implements OnInit {

  message1:string;

  constructor(private data: AppserviceService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message1 => this.message1 = message1)
  }

}

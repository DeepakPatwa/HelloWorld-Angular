import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Scenario1Component } from './scenario1/scenario1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Scenario2Component } from './scenario2/scenario2.component';
import { Scenario3Component } from './scenario3/scenario3.component';
import { ChildComponent } from './scenario3/child/child.component';
import { Scenario3nComponent } from './scenario3n/scenario3n.component';
import { ParentComponent } from './scenario3n/parent.component';
import { Scenario4Component } from './scenario4/scenario4.component';
import { ParentmsgComponent } from './scenario4/parentmsg.component';
import { Scenario5Component } from './scenario5/scenario5.component';
import { ParentchildComponent } from './scenario5/parentchild.component'
import { GrandpaComponent } from './scenario5/grandpa.component';
import { Scenario6Component } from './scenario6/scenario6.component';
import { Child1Component } from './scenario6/child1/child1.component';
import { Child2Component } from './scenario6/child2/child2.component'

@NgModule({
  declarations: [
    AppComponent,
    Scenario1Component,
    Scenario2Component,
    Scenario3Component,
    ChildComponent,
    Scenario3nComponent,
    ParentComponent,
    Scenario4Component,
    ParentmsgComponent,
    Scenario5Component,
    ParentchildComponent,
    GrandpaComponent,
    Scenario6Component,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

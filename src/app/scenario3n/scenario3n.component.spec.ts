import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scenario3nComponent } from './scenario3n.component';

describe('Scenario3nComponent', () => {
  let component: Scenario3nComponent;
  let fixture: ComponentFixture<Scenario3nComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scenario3nComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scenario3nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

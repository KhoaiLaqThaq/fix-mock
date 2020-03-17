import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSwitchesComponent } from './toggle-switches.component';

describe('ToggleSwitchesComponent', () => {
  let component: ToggleSwitchesComponent;
  let fixture: ComponentFixture<ToggleSwitchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleSwitchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSwitchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

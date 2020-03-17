import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDataTableComponent } from './building-data-table.component';

describe('BuildingDataTableComponent', () => {
  let component: BuildingDataTableComponent;
  let fixture: ComponentFixture<BuildingDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

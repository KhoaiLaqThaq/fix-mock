import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingHeaderComponent } from './building-header.component';

describe('BuildingHeaderComponent', () => {
  let component: BuildingHeaderComponent;
  let fixture: ComponentFixture<BuildingHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingSearchComponent } from './building-search.component';

describe('BuildingSearchComponent', () => {
  let component: BuildingSearchComponent;
  let fixture: ComponentFixture<BuildingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

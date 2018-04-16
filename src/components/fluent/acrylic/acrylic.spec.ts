import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluentAcrylicComponent } from './acrylic';

describe('FluentAcrylicComponent', () => {
  let component: FluentAcrylicComponent;
  let fixture: ComponentFixture<FluentAcrylicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluentAcrylicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluentAcrylicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

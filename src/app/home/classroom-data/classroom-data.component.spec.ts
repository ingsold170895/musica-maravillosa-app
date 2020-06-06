import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomDataComponent } from './classroom-data.component';

describe('ClassroomDataComponent', () => {
  let component: ClassroomDataComponent;
  let fixture: ComponentFixture<ClassroomDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

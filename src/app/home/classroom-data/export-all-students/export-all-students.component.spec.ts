import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportAllStudentsComponent } from './export-all-students.component';

describe('ExportAllStudentsComponent', () => {
  let component: ExportAllStudentsComponent;
  let fixture: ComponentFixture<ExportAllStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportAllStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

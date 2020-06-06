import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PentagramaPdfComponent } from './pentagrama-pdf.component';

describe('PentagramaPdfComponent', () => {
  let component: PentagramaPdfComponent;
  let fixture: ComponentFixture<PentagramaPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PentagramaPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PentagramaPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

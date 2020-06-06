import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViwerPdfComponent } from './viwer-pdf.component';

describe('ViwerPdfComponent', () => {
  let component: ViwerPdfComponent;
  let fixture: ComponentFixture<ViwerPdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViwerPdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViwerPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonotecaComponent } from './fonoteca.component';

describe('FonotecaComponent', () => {
  let component: FonotecaComponent;
  let fixture: ComponentFixture<FonotecaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonotecaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

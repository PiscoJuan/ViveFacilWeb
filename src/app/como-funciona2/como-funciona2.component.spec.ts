import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoFunciona2Component } from './como-funciona2.component';

describe('ComoFunciona2Component', () => {
  let component: ComoFunciona2Component;
  let fixture: ComponentFixture<ComoFunciona2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComoFunciona2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoFunciona2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

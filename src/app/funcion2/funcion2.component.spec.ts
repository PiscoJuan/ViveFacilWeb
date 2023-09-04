import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Funcion2Component } from './funcion2.component';

describe('Funcion2Component', () => {
  let component: Funcion2Component;
  let fixture: ComponentFixture<Funcion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Funcion2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Funcion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

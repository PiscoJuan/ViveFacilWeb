import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalAdecuadoComponent } from './profesional-adecuado.component';

describe('ProfesionalAdecuadoComponent', () => {
  let component: ProfesionalAdecuadoComponent;
  let fixture: ComponentFixture<ProfesionalAdecuadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesionalAdecuadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesionalAdecuadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

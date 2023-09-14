import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolucionEmprendedoresComponent } from './solucion-emprendedores.component';

describe('SolucionEmprendedoresComponent', () => {
  let component: SolucionEmprendedoresComponent;
  let fixture: ComponentFixture<SolucionEmprendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolucionEmprendedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolucionEmprendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptimasCondicionesComponent } from './optimas-condiciones.component';

describe('OptimasCondicionesComponent', () => {
  let component: OptimasCondicionesComponent;
  let fixture: ComponentFixture<OptimasCondicionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptimasCondicionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptimasCondicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

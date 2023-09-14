import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NueveServiciosComponent } from './nueve-servicios.component';

describe('NueveServiciosComponent', () => {
  let component: NueveServiciosComponent;
  let fixture: ComponentFixture<NueveServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NueveServiciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NueveServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

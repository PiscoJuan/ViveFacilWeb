import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorOpcionComponent } from './mejor-opcion.component';

describe('MejorOpcionComponent', () => {
  let component: MejorOpcionComponent;
  let fixture: ComponentFixture<MejorOpcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejorOpcionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MejorOpcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

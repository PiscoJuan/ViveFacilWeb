import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomiaLocalComponent } from './economia-local.component';

describe('EconomiaLocalComponent', () => {
  let component: EconomiaLocalComponent;
  let fixture: ComponentFixture<EconomiaLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomiaLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EconomiaLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

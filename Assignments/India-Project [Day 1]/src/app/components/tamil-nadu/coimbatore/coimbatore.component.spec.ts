import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoimbatoreComponent } from './coimbatore.component';

describe('CoimbatoreComponent', () => {
  let component: CoimbatoreComponent;
  let fixture: ComponentFixture<CoimbatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoimbatoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoimbatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

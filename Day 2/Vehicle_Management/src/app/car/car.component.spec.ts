import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CARComponent } from './car.component';

describe('CARComponent', () => {
  let component: CARComponent;
  let fixture: ComponentFixture<CARComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CARComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CARComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

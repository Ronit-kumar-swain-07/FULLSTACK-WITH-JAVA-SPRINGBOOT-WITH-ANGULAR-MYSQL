import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgaumComponent } from './belgaum.component';

describe('BelgaumComponent', () => {
  let component: BelgaumComponent;
  let fixture: ComponentFixture<BelgaumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BelgaumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelgaumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

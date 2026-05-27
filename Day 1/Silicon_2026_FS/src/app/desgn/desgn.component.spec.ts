import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesgnComponent } from './desgn.component';

describe('DesgnComponent', () => {
  let component: DesgnComponent;
  let fixture: ComponentFixture<DesgnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesgnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesgnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
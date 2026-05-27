import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerhampurComponent } from './berhampur.component';

describe('BerhampurComponent', () => {
  let component: BerhampurComponent;
  let fixture: ComponentFixture<BerhampurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerhampurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerhampurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

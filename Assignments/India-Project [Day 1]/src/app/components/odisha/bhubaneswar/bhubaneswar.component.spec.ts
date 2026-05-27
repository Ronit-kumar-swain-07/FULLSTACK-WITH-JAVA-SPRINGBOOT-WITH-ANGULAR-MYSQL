import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhubaneswarComponent } from './bhubaneswar.component';

describe('BhubaneswarComponent', () => {
  let component: BhubaneswarComponent;
  let fixture: ComponentFixture<BhubaneswarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhubaneswarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhubaneswarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

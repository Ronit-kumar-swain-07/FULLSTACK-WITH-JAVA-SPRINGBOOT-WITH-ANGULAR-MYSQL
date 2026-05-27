import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttackComponent } from './cuttack.component';

describe('CuttackComponent', () => {
  let component: CuttackComponent;
  let fixture: ComponentFixture<CuttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuttackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

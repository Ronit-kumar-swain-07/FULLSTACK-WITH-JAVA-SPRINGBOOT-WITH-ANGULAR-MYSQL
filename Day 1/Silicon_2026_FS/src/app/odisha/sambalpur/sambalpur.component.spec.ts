import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SambalpurComponent } from './sambalpur.component';

describe('SambalpurComponent', () => {
  let component: SambalpurComponent;
  let fixture: ComponentFixture<SambalpurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SambalpurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SambalpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

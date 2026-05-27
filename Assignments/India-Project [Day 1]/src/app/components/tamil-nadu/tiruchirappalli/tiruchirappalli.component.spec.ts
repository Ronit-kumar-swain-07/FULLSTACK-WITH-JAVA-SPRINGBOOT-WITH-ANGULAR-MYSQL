import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiruchirappalliComponent } from './tiruchirappalli.component';

describe('TiruchirappalliComponent', () => {
  let component: TiruchirappalliComponent;
  let fixture: ComponentFixture<TiruchirappalliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiruchirappalliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiruchirappalliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalemComponent } from './salem.component';

describe('SalemComponent', () => {
  let component: SalemComponent;
  let fixture: ComponentFixture<SalemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

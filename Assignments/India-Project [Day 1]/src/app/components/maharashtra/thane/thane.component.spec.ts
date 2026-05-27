import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThaneComponent } from './thane.component';

describe('ThaneComponent', () => {
  let component: ThaneComponent;
  let fixture: ComponentFixture<ThaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TRUCKComponent } from './truck.component';

describe('TRUCKComponent', () => {
  let component: TRUCKComponent;
  let fixture: ComponentFixture<TRUCKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TRUCKComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TRUCKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

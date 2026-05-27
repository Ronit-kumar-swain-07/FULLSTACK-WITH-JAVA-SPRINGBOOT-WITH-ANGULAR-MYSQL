import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HubliComponent } from './hubli.component';

describe('HubliComponent', () => {
  let component: HubliComponent;
  let fixture: ComponentFixture<HubliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HubliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HubliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

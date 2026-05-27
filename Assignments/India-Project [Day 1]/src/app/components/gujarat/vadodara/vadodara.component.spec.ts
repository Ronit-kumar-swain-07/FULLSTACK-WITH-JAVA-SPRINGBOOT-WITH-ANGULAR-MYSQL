import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VadodaraComponent } from './vadodara.component';

describe('VadodaraComponent', () => {
  let component: VadodaraComponent;
  let fixture: ComponentFixture<VadodaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VadodaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VadodaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

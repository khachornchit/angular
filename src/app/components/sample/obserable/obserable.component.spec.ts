import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserableComponent } from './obserable.component';

describe('ObserableComponent', () => {
  let component: ObserableComponent;
  let fixture: ComponentFixture<ObserableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObserableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

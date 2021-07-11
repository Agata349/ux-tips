import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplicityComponent } from './simplicity.component';

describe('SimplicityComponent', () => {
  let component: SimplicityComponent;
  let fixture: ComponentFixture<SimplicityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplicityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

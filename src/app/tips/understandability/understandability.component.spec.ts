import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandabilityComponent } from './understandability.component';

describe('UnderstandabilityComponent', () => {
  let component: UnderstandabilityComponent;
  let fixture: ComponentFixture<UnderstandabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderstandabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderstandabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

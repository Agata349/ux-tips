import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentyFirstCenturyDesignComponent } from './twenty-first-century-design.component';

describe('TwentyFirstCenturyDesignComponent', () => {
  let component: TwentyFirstCenturyDesignComponent;
  let fixture: ComponentFixture<TwentyFirstCenturyDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwentyFirstCenturyDesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentyFirstCenturyDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectDesignerComponent } from './architect-designer.component';

describe('ArchitectDesignerComponent', () => {
  let component: ArchitectDesignerComponent;
  let fixture: ComponentFixture<ArchitectDesignerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitectDesignerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectDesignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

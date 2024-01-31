import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTrendComponent } from './all-trend.component';

describe('AllTrendComponent', () => {
  let component: AllTrendComponent;
  let fixture: ComponentFixture<AllTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTrendComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

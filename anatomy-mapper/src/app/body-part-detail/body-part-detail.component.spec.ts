import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPartDetailComponent } from './body-part-detail.component';

describe('BodyPartDetailComponent', () => {
  let component: BodyPartDetailComponent;
  let fixture: ComponentFixture<BodyPartDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyPartDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodyPartDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

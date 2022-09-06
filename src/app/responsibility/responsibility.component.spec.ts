import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilityComponent } from './responsibility.component';

describe('ResponsibilityComponent', () => {
  let component: ResponsibilityComponent;
  let fixture: ComponentFixture<ResponsibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

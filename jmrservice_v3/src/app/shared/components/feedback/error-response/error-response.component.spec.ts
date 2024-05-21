import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorResponseComponent } from './error-response.component';

describe('ErrorResponseComponent', () => {
  let component: ErrorResponseComponent;
  let fixture: ComponentFixture<ErrorResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorResponseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

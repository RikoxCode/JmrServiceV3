import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoToAdminBtnComponent } from './go-to-admin-btn.component';

describe('GoToAdminBtnComponent', () => {
  let component: GoToAdminBtnComponent;
  let fixture: ComponentFixture<GoToAdminBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoToAdminBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoToAdminBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

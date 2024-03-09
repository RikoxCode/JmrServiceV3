import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrCountComponent } from './usr-count.component';

describe('UsrCountComponent', () => {
  let component: UsrCountComponent;
  let fixture: ComponentFixture<UsrCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsrCountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsrCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

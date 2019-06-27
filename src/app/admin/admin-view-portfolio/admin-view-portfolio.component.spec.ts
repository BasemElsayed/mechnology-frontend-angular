import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPortfolioComponent } from './admin-view-portfolio.component';

describe('AdminViewPortfolioComponent', () => {
  let component: AdminViewPortfolioComponent;
  let fixture: ComponentFixture<AdminViewPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewServicesComponent } from './admin-view-services.component';

describe('AdminViewServicesComponent', () => {
  let component: AdminViewServicesComponent;
  let fixture: ComponentFixture<AdminViewServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

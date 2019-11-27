import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirhubManagementComponent } from './airhub-management.component';

describe('AirhubManagementComponent', () => {
  let component: AirhubManagementComponent;
  let fixture: ComponentFixture<AirhubManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirhubManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirhubManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDataWbsComponent } from './my-data-wbs.component';

describe('MyDataWbsComponent', () => {
  let component: MyDataWbsComponent;
  let fixture: ComponentFixture<MyDataWbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDataWbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDataWbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

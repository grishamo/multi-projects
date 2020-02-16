import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsocLibComponent } from './asoc-lib.component';

describe('AsocLibComponent', () => {
  let component: AsocLibComponent;
  let fixture: ComponentFixture<AsocLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsocLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsocLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

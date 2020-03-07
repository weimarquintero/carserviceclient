import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { addOwnerComponent } from './add-owner.component';

describe('addOwnerComponent', () => {
  let component: addOwnerComponent;
  let fixture: ComponentFixture<addOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ addOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

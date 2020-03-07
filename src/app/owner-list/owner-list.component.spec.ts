import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ownerlistcomponent } from './owner-list.component';

describe('OwnerListComponent', () => {
  let component: ownerlistcomponent;
  let fixture: ComponentFixture<ownerlistcomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ownerlistcomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ownerlistcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerchasePage } from './perchase.page';

describe('PerchasePage', () => {
  let component: PerchasePage;
  let fixture: ComponentFixture<PerchasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerchasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaticiniosPage } from './laticinios.page';

describe('LaticiniosPage', () => {
  let component: LaticiniosPage;
  let fixture: ComponentFixture<LaticiniosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaticiniosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaticiniosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

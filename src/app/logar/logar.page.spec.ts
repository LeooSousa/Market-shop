import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarPage } from './logar.page';

describe('LogarPage', () => {
  let component: LogarPage;
  let fixture: ComponentFixture<LogarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

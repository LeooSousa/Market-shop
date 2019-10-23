import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpezaPage } from './limpeza.page';

describe('LimpezaPage', () => {
  let component: LimpezaPage;
  let fixture: ComponentFixture<LimpezaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpezaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpezaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

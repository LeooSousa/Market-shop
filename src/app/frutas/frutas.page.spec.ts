import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutasPage } from './frutas.page';

describe('FrutasPage', () => {
  let component: FrutasPage;
  let fixture: ComponentFixture<FrutasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

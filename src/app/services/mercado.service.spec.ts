import { TestBed } from '@angular/core/testing';

import { MercadoService } from './mercado.service';

describe('MercadoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MercadoService = TestBed.get(MercadoService);
    expect(service).toBeTruthy();
  });
});

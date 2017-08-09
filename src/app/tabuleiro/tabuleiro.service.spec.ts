import { TestBed, inject } from '@angular/core/testing';

import { TabuleiroService } from './tabuleiro.service';

describe('TabuleiroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TabuleiroService]
    });
  });

  it('should be created', inject([TabuleiroService], (service: TabuleiroService) => {
    expect(service).toBeTruthy();
  }));
});

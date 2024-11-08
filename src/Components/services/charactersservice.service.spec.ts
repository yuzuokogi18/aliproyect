import { TestBed } from '@angular/core/testing';

import { CharactersServiceService } from '../Components/services/characters-service.service';

describe('CharactersServiceService', () => {
  let service: CharactersServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

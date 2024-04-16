import { TestBed } from '@angular/core/testing';

import { DocumentlistService } from './documentlist.service';

describe('DocumentlistService', () => {
  let service: DocumentlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

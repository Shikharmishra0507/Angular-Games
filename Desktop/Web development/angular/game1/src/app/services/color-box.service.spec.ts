import { TestBed } from '@angular/core/testing';

import { ColorBoxService } from './color-box.service';

describe('ColorBoxService', () => {
  let service: ColorBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

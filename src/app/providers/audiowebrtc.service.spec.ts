import { TestBed } from '@angular/core/testing';

import { AudiowebrtcService } from './audiowebrtc.service';

describe('AudiowebrtcService', () => {
  let service: AudiowebrtcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudiowebrtcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

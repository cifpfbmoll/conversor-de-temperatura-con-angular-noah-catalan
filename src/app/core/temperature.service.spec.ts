import { TestBed } from '@angular/core/testing';

import { TemperatureService } from './temperature.service';

describe('TemperatureService', () => {
  let service: TemperatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemperatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('converts Celsius to Fahrenheit', () => {
    expect(service.convert(0, 'Celsius', 'Fahrenheit')).toBeCloseTo(32, 2);
    expect(service.convert(100, 'Celsius', 'Fahrenheit')).toBeCloseTo(212, 2);
  });

  it('converts Fahrenheit to Celsius', () => {
    expect(service.convert(32, 'Fahrenheit', 'Celsius')).toBeCloseTo(0, 2);
    expect(service.convert(212, 'Fahrenheit', 'Celsius')).toBeCloseTo(100, 2);
  });

  it('converts Celsius to Kelvin and back', () => {
    const k = service.convert(25, 'Celsius', 'Kelvin');
    expect(k).toBeCloseTo(298.15, 2);
    const c = service.convert(k, 'Kelvin', 'Celsius');
    expect(c).toBeCloseTo(25, 2);
  });
});

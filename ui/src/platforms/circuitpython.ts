import { PlatformInterface } from '../types';

export function newCircuitPythonPlatform(): PlatformInterface {
  return {
    name: 'CircuitPython',
    image: '/images/circuitplayground.png',
    capabilities: [],
    defaultExtensions: [
      'CircuitPython General',
    ],
    extentions: [],
  };
}

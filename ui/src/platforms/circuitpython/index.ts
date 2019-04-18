import { PlatformInterface } from '../../types';

export function newCircuitPythonPlatform(): PlatformInterface {
  return {
    key: 'CircuitPython',
    name: 'CircuitPython',
    image: '/images/circuitplayground.png',
    capabilities: [],
    defaultExtensions: [
      'CircuitPython General',
    ],
    extensions: [],
  };
}

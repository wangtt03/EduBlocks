import { Platform, PlatformInterface, PlatformSelection } from '../types';
import { newMicrobitPlatform } from './microbit';
import { newRaspberryPiPlatform } from './raspberrypi';
import { newWebPlatform } from './web';
import { newCircuitPythonPlatform } from './circuitpython';


export function getPlatformList(): PlatformSelection[] {
  return [
    { platform: 'Web', title: 'Web Python', image: '/images/webpy.png', help: 'https://docs.edublocks.org/mode-guides/web' },
    // { title: 'Advanced Python', image: '/images/advpy.png', help: 'https://edublocks.org' },
    { platform: 'RaspberryPi', title: 'Raspberry Pi', image: '/images/pi.png', help: 'https://docs.edublocks.org/mode-guides/raspberry-pi' },
    { platform: 'MicroBit', title: 'micro:bit', image: '/images/microbit.png', help: 'https://docs.edublocks.org/mode-guides/microbit' },
    { platform: 'CircuitPython', title: 'CircuitPython', image: '/images/circuitplayground.png', help: 'https://docs.edublocks.org/mode-guides/circuitpython' },
  ];
}

export async function getPlatform(platform: Platform): Promise<PlatformInterface> {
  switch (platform) {
    case 'Web':
      return newWebPlatform();
    case 'MicroBit':
      return newMicrobitPlatform();
    case 'RaspberryPi':
      return newRaspberryPiPlatform();
    case 'CircuitPython':
      return newCircuitPythonPlatform();
  }
}

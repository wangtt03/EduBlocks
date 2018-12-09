import { PlatformInterface } from '../types';

export function newRaspberryPiPlatform(): PlatformInterface {
  return {
    name: 'micro:bit',
    image: '/images/pi.png',
    capabilities: ['RemoteShell'],
    defaultExtensions: [
      'Pi General',
    ],
    extentions: [],
  };
}

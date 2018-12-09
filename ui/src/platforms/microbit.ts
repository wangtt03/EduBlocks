import { PlatformInterface } from '../types';

export function newMicrobitPlatform(): PlatformInterface {
  return {
    name: 'micro:bit',
    image: '/images/microbit.png',
    capabilities: ['HexDownload'],
    defaultExtensions: [
      'micro:bit General',
    ],
    extentions: [
      'scroll:bit',
      'GiggleBot',
      'Pi Supply IoT LoRa Node',
    ],
  };
}

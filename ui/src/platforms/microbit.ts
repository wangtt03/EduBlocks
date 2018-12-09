import { PlatformInterface } from '../types';

export function newMicrobitPlatform(): PlatformInterface {
  return {
    name: 'micro:bit',
    image: '/images/microbit.png',
    capabilities: ['HexDownload'],
    extentions: [
      'scroll:bit',
      'GiggleBot',
      'Pi Supply IoT LoRa Node',
    ],
  };
}

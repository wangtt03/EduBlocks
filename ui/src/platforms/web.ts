import { PlatformInterface } from '../types';

export function newWebPlatform(): PlatformInterface {
  return {
    name: 'Web Python',
    image: '/images/webpy.png',
    capabilities: ['TrinketShell'],
    extentions: [],
  };
}

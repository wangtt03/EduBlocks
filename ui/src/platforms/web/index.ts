import { PlatformInterface } from '../../types';

export function newWebPlatform(): PlatformInterface {
  return {
    key: 'Web',
    name: 'Web Python',
    image: '/images/webpy.png',
    capabilities: ['TrinketShell'],
    defaultExtensions: [
      'Web General',
    ],
    extensions: [],
  };
}

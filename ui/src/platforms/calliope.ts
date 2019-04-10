import { PlatformInterface } from '../types';

export function newCalliopePlatform(): PlatformInterface {
  return {
    name: 'Calliope Mini',
    image: '/images/calliope.png',
    capabilities: ['HexDownload'],
    defaultExtensions: [
      'Calliope General',
    ],
    extentions: [],
  };
}

export interface App {
  runCode(code: string): void;

  openFile(): Promise<string>;
  saveFile(data: string | Uint8Array, ext: string, type: string): Promise<void>;
  exportPython(python: string, extensions: Extension[]): Promise<void>;
  saveHex(python: string, extensions: Extension[]): Promise<void>;

  assignTerminal(term: TerminalInterface): void;

  getThemes(): string[];

  getSamples(): string[];
  getSample(file: string): string;
}

export interface TerminalEvents {
  data: (data: string) => void;
  resize: (cols: number, rows: number) => void;
}

export interface TerminalInterface {
  on<K extends keyof TerminalEvents>(eventType: K, handler: TerminalEvents[K]): void;

  focus(): void;
  write(s: string): void;
  reset(): void;

  cols: number;
  rows: number;
}

export type Extension = 'scroll:bit' | 'enviro:bit' | 'GiggleBot' | 'Pi Supply IoT LoRa Node' | 'EnviroBit';

export type Platform = 'MicroBit' | 'RaspberryPi';

export interface PlatformSelection {
  platform: Platform;
  title: string;
  image: string;
  help: string;
}

export interface PlatformInterface {
  name: string;
  image: string;
  capabilities: Capability[];
  extentions: Extension[];
}

export type Capability = 'HexDownload' | 'RemoteShell';

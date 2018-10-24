interface App {
  runCode(code: string): void;

  openFile(): Promise<string>;
  saveFile(data: string | Uint8Array, ext: string, type: string): Promise<void>;
  exportPython(python: string, extensions: Extension[]): Promise<void>;
  saveHex(python: string, extensions: Extension[]): Promise<void>;

  assignTerminal(term: TerminalInterface): void;

  getThemes(): string[];
  getExtensions(): Extension[];

  getSamples(): string[];
  getSample(file: string): string;
}

interface TerminalEvents {
  data: (data: string) => void;
  resize: (cols: number, rows: number) => void;
}

interface TerminalInterface {
  on<K extends keyof TerminalEvents>(eventType: K, handler: TerminalEvents[K]): void;

  focus(): void;
  write(s: string): void;
  reset(): void;

  cols: number;
  rows: number;
}

type Extension = 'Circuit Playground Easy' | 'enviro:bit' | 'gigglebot';

export {
  App,
  TerminalEvents,
  TerminalInterface,
  Extension,
};

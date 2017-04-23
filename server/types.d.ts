declare namespace Express {
  interface Application {
    ws(path: string, callback: (ws: WebSocket, req: Request) => void): void;
  }

  interface WebSocket extends NodeJS.EventEmitter {
    send(msg: string): void;
  }
}

interface EduBlocksClient {
  writeLine(line: string): void;

  // onInput(handler: (line: string) => void): void;
}

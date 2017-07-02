import { newServer } from './server';
import { App, TerminalInterface } from './types';
import { getIo } from './io';

async function newApp(): Promise<App> {
  const client = await newServer();
  const io = getIo();

  function runCode(code: string) {
    return client.runCode(code);
  }

  function openFile() {
    return io.openFile();
  }

  function saveFile(data: string, ext: string) {
    return io.saveFile(data, ext);
  }

  function assignTerminal(terminal: TerminalInterface) {
    client.on('data', (data) => terminal.write(data));

    client.on('reconnect', () => {
      terminal.reset();

      client.resizeTerminal(terminal.cols, terminal.rows);
    });

    terminal.on('data', client.sendData);
    terminal.on('resize', client.resizeTerminal);

    if (terminal.cols && terminal.rows) {
      client.resizeTerminal(terminal.cols, terminal.rows);
    }
  }

  return {
    runCode,
    openFile,
    saveFile,
    assignTerminal,
  };
}

export {
  newApp,
};

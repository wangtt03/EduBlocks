import { newServer } from './server';
import { App, TerminalInterface } from './types';
import { getIo } from './io';
import { newSamples } from './samples';

async function newApp(): Promise<App> {
  const client = await newServer();
  const io = getIo();
  const samples = newSamples();

  function runCode(code: string) {
    return client.runCode(code);
  }

  function openFile() {
    return io.openFile();
  }

  function saveFile(data: string | Uint8Array, ext: string, type: string) {
    return io.saveFile(data, ext, type);
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

  function getThemes() {
    return [
      'space',
      'minecraft',
      'slate',
      'circuitboard',
      'dark',
    ];
  }

  return {
    runCode,
    openFile,
    saveFile,
    assignTerminal,
    getThemes,
    ...samples,
  };
}

export {
  newApp,
};

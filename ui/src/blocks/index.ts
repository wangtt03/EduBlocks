import fs = require('fs');
import path = require('path');
import { Extension } from '../types';

export async function getToolBoxXml(extensions: Extension[]) {
  let toolBoxXml = '';

  toolBoxXml += '<xml>';

  (await import('./all-platforms/basic/definitions')).default(Blockly.Blocks);
  (await import('./all-platforms/basic/generators')).default(Blockly.Python as any);
  toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'all-platforms', 'basic', 'toolbox.xml'));

  if (extensions.indexOf('micro:bit General') !== -1) {
    (await import('./microbit/display/definitions')).default(Blockly.Blocks);
    (await import('./microbit/display/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'display', 'toolbox.xml'));

    (await import('./microbit/buttons/definitions')).default(Blockly.Blocks);
    (await import('./microbit/buttons/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'buttons', 'toolbox.xml'));

    (await import('./microbit/accelerometer/definitions')).default(Blockly.Blocks);
    (await import('./microbit/accelerometer/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'accelerometer', 'toolbox.xml'));

    (await import('./microbit/compass/definitions')).default(Blockly.Blocks);
    (await import('./microbit/compass/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'compass', 'toolbox.xml'));

    (await import('./microbit/radio/definitions')).default(Blockly.Blocks);
    (await import('./microbit/radio/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'radio', 'toolbox.xml'));

    (await import('./microbit/speech/definitions')).default(Blockly.Blocks);
    (await import('./microbit/speech/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'speech', 'toolbox.xml'));

    (await import('./microbit/music/definitions')).default(Blockly.Blocks);
    (await import('./microbit/music/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'music', 'toolbox.xml'));

    (await import('./microbit/neopixel/definitions')).default(Blockly.Blocks);
    (await import('./microbit/neopixel/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'neopixel', 'toolbox.xml'));

    (await import('./microbit/pins/definitions')).default(Blockly.Blocks);
    (await import('./microbit/pins/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'pins', 'toolbox.xml'));
  }

  if (extensions.indexOf('scroll:bit') !== -1) {
    (await import('./microbit/scrollbit/definitions')).default(Blockly.Blocks);
    (await import('./microbit/scrollbit/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'scrollbit', 'toolbox.xml'));
  }

  if (extensions.indexOf('GiggleBot') !== -1) {
    (await import('./microbit/gigglebot/definitions')).default(Blockly.Blocks);
    (await import('./microbit/gigglebot/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'gigglebot', 'toolbox.xml'));
  }

  if (extensions.indexOf('Pi Supply IoT LoRa Node') !== -1) {
    (await import('./microbit/radio/definitions')).default(Blockly.Blocks);
    (await import('./microbit/radio/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'radio', 'toolbox.xml'));
  }

  toolBoxXml += '</xml>';

  return toolBoxXml;
}

export function getBeforeScript(extensions: Extension[]) {
  if (extensions.indexOf('scroll:bit') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'scrollbit', 'scrollbit.py'));
  }
  if (extensions.indexOf('GiggleBot') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'gigglebot', 'gigglebot.py'));
  }
  if (extensions.indexOf('Pi Supply IoT LoRa Node') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'iotloranode', 'iotloranode.py'));
  }
}

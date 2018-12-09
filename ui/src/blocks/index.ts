import fs = require('fs');
import path = require('path');
import { Extension } from '../types';

export async function getToolBoxXml(extensions: Extension[]) {
  let toolBoxXml = '';

  toolBoxXml += '<xml>';

  (await import('./basic/definitions')).default(Blockly.Blocks);
  (await import('./basic/generators')).default(Blockly.Python as any);
  toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));

  if (extensions.indexOf('micro:bit General') !== -1) {
    (await import('./display/definitions')).default(Blockly.Blocks);
    (await import('./display/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'display', 'toolbox.xml'));

    (await import('./buttons/definitions')).default(Blockly.Blocks);
    (await import('./buttons/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'buttons', 'toolbox.xml'));

    (await import('./accelerometer/definitions')).default(Blockly.Blocks);
    (await import('./accelerometer/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'accelerometer', 'toolbox.xml'));

    (await import('./compass/definitions')).default(Blockly.Blocks);
    (await import('./compass/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'compass', 'toolbox.xml'));

    (await import('./radio/definitions')).default(Blockly.Blocks);
    (await import('./radio/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'radio', 'toolbox.xml'));

    (await import('./speech/definitions')).default(Blockly.Blocks);
    (await import('./speech/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'speech', 'toolbox.xml'));

    (await import('./music/definitions')).default(Blockly.Blocks);
    (await import('./music/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'music', 'toolbox.xml'));

    (await import('./neopixel/definitions')).default(Blockly.Blocks);
    (await import('./neopixel/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'neopixel', 'toolbox.xml'));

    (await import('./pins/definitions')).default(Blockly.Blocks);
    (await import('./pins/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pins', 'toolbox.xml'));
  }

  if (extensions.indexOf('scroll:bit') !== -1) {
    (await import('./scrollbit/definitions')).default(Blockly.Blocks);
    (await import('./scrollbit/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'scrollbit', 'toolbox.xml'));
  }

  if (extensions.indexOf('GiggleBot') !== -1) {
    (await import('./gigglebot/definitions')).default(Blockly.Blocks);
    (await import('./gigglebot/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'gigglebot', 'toolbox.xml'));
  }

  if (extensions.indexOf('Pi Supply IoT LoRa Node') !== -1) {
    (await import('./radio/definitions')).default(Blockly.Blocks);
    (await import('./radio/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'radio', 'toolbox.xml'));
  }

  toolBoxXml += '</xml>';

  return toolBoxXml;
}

export function getBeforeScript(extensions: Extension[]) {
  if (extensions.indexOf('scroll:bit') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'scrollbit', 'scrollbit.py'));
  }
  if (extensions.indexOf('GiggleBot') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'gigglebot', 'gigglebot.py'));
  }
  if (extensions.indexOf('Pi Supply IoT LoRa Node') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'iotloranode', 'iotloranode.py'));
  }
}

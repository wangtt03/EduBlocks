import fs = require('fs');
import path = require('path');
import { Extension } from '../types';

export async function getToolBoxXml(extensions: Extension[]) {
  let toolBoxXml = '';

  toolBoxXml += '<xml>';

  if (extensions.indexOf('Web General') !== -1) {
    (await import('./web/basic/definitions')).default(Blockly.Blocks);
    (await import('./web/basic/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'basic', 'toolbox.xml'));

    (await import('./web/turtle/definitions')).default(Blockly.Blocks);
    (await import('./web/turtle/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'web', 'turtle', 'toolbox.xml'));
  }

  if (extensions.indexOf('micro:bit General') !== -1) {
    (await import('./microbit/basic/definitions')).default(Blockly.Blocks);
    (await import('./microbit/basic/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'microbit', 'basic', 'toolbox.xml'));

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

  if (extensions.indexOf('Pi General') !== -1) {
    (await import('./pi/basic/definitions')).default(Blockly.Blocks);
    (await import('./pi/basic/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'basic', 'toolbox.xml'));

    (await import('./pi/minecraft/definitions')).default(Blockly.Blocks);
    (await import('./pi/minecraft/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'minecraft', 'toolbox.xml'));

    (await import('./pi/gpiozero/definitions')).default(Blockly.Blocks);
    (await import('./pi/gpiozero/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'gpiozero', 'toolbox.xml'));

    (await import('./pi/sonicpi/definitions')).default(Blockly.Blocks);
    (await import('./pi/sonicpi/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'sonicpi', 'toolbox.xml'));

    (await import('./pi/pimoroni/definitions')).default(Blockly.Blocks);
    (await import('./pi/pimoroni/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'pimoroni', 'toolbox.xml'));

    (await import('./pi/advanced/definitions')).default(Blockly.Blocks);
    (await import('./pi/advanced/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'advanced', 'toolbox.xml'));

    (await import('./pi/sensehat/definitions')).default(Blockly.Blocks);
    (await import('./pi/sensehat/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'sensehat', 'toolbox.xml'));

    (await import('./pi/bitio/definitions')).default(Blockly.Blocks);
    (await import('./pi/bitio/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'bitio', 'toolbox.xml'));

    (await import('./pi/turtle/definitions')).default(Blockly.Blocks);
    (await import('./pi/turtle/generators')).default(Blockly.Python as any);
    toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pi', 'turtle', 'toolbox.xml'));
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

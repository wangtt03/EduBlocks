import fs = require('fs');
import path = require('path');

import basicDefs from './basic/definitions';
import basicGens from './basic/generators';
basicDefs(Blockly.Blocks);
basicGens(Blockly.Python as any);
const basic = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));

import displayDefs from './display/definitions';
import displayGens from './display/generators';
displayDefs(Blockly.Blocks);
displayGens(Blockly.Python as any);
const display = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'display', 'toolbox.xml'));

import buttonsDefs from './buttons/definitions';
import buttonsGens from './buttons/generators';
buttonsDefs(Blockly.Blocks);
buttonsGens(Blockly.Python as any);
const buttons = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'buttons', 'toolbox.xml'));

import accelerometerDefs from './accelerometer/definitions';
import accelerometerGens from './accelerometer/generators';
accelerometerDefs(Blockly.Blocks);
accelerometerGens(Blockly.Python as any);
const accelerometer = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'accelerometer', 'toolbox.xml'));

import compassDefs from './compass/definitions';
import compassGens from './compass/generators';
compassDefs(Blockly.Blocks);
compassGens(Blockly.Python as any);
const compass = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'compass', 'toolbox.xml'));

import radioDefs from './radio/definitions';
import radioGens from './radio/generators';
radioDefs(Blockly.Blocks);
radioGens(Blockly.Python as any);
const radio = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'radio', 'toolbox.xml'));

import speechDefs from './speech/definitions';
import speechGens from './speech/generators';
speechDefs(Blockly.Blocks);
speechGens(Blockly.Python as any);
const speech = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'speech', 'toolbox.xml'));

import musicDefs from './music/definitions';
import musicGens from './music/generators';
musicDefs(Blockly.Blocks);
musicGens(Blockly.Python as any);
const music = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'music', 'toolbox.xml'));

import neopixelDefs from './neopixel/definitions';
import neopixelGens from './neopixel/generators';
neopixelDefs(Blockly.Blocks);
neopixelGens(Blockly.Python as any);
const neopixel = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'neopixel', 'toolbox.xml'));

import pinsDefs from './pins/definitions';
import pinsGens from './pins/generators';
import { Extension } from '../types';
pinsDefs(Blockly.Blocks);
pinsGens(Blockly.Python as any);
const pins = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pins', 'toolbox.xml'));

function getToolBoxXml(extensions: Extension[]) {
  let toolBoxXml = '';

  toolBoxXml += '<xml>';

  toolBoxXml += basic;
  toolBoxXml += display;
  toolBoxXml += buttons;
  toolBoxXml += accelerometer;
  toolBoxXml += compass;
  toolBoxXml += radio;
  toolBoxXml += speech;
  toolBoxXml += music;

  if (extensions.indexOf('scroll:bit') !== -1) {
    toolBoxXml += neopixel;
  }

  if (extensions.indexOf('enviro:bit') !== -1) {
    toolBoxXml += pins;
  }

  toolBoxXml += '</xml>';

  return toolBoxXml;
}

export {
  getToolBoxXml,
};

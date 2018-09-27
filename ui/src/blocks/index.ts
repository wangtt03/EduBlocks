import fs = require('fs');
import path = require('path');

import basicDefs from './basic/definitions';
import basicGens from './basic/generators';
basicDefs(Blockly.Blocks);
basicGens(Blockly.Python as any);
const basic = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));

import variablesDefs from './Variables/definitions';
import variablesGens from './Variables/generators';
variablesDefs(Blockly.Blocks);
variablesGens(Blockly.Python as any);

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
pinsDefs(Blockly.Blocks);
pinsGens(Blockly.Python as any);
const pins = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pins', 'toolbox.xml'));


import { Extension } from '../types';

import scrollbitDefs from './scrollbit/definitions';
import scrollbitGens from './scrollbit/generators';
scrollbitDefs(Blockly.Blocks);
scrollbitGens(Blockly.Python as any);
const scrollbit = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'scrollbit', 'toolbox.xml'));

import gigglebotDefs from './gigglebot/definitions';
import gigglebotGens from './gigglebot/generators';
gigglebotDefs(Blockly.Blocks);
gigglebotGens(Blockly.Python as any);
const gigglebot = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'gigglebot', 'toolbox.xml'));

import envirobitDefs from './envirobit/definitions';
import envirobitGens from './envirobit/generators';
envirobitDefs(Blockly.Blocks);
envirobitGens(Blockly.Python as any);
const envirobit = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'envirobit', 'toolbox.xml'));

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
  toolBoxXml += neopixel;
  toolBoxXml += pins;

  if (extensions.indexOf('scroll:bit') !== -1) {
    toolBoxXml += scrollbit;
  }

  if (extensions.indexOf('GiggleBot') !== -1 ) {
    toolBoxXml += gigglebot;
  }

  if (extensions.indexOf('EnviroBit') !== -1 ) {
      toolBoxXml += envirobit;
  }

  toolBoxXml += '</xml>';

  return toolBoxXml;
}

function getBeforeScript(extensions: Extension[]) {
  if (extensions.indexOf('scroll:bit') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'scrollbit', 'scrollbit.py'));
  }
  if (extensions.indexOf('GiggleBot') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'gigglebot', 'gigglebot.py'));
  }
  if (extensions.indexOf('Pi Supply IoT LoRa Node') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'iotloranode', 'iotloranode.py'));
  }
  if (extensions.indexOf('EnviroBit') !== -1) {
      return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'envirobit', 'envirobit.py'));
  }
}

export {
  getToolBoxXml,
  getBeforeScript,
};

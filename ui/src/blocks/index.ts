import fs = require('fs');
import path = require('path');

import basicDefs from './basic/definitions';
import basicGens from './basic/generators';
basicDefs(Blockly.Blocks);
basicGens(Blockly.Python as any);
const basic = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));

import dotstarDefs from './dotstar/definitions';
import dotstarGens from './dotstar/generators';
dotstarDefs(Blockly.Blocks);
dotstarGens(Blockly.Python as any);
const dotstar = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'dotstar', 'toolbox.xml'));

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

  if (extensions.indexOf('gigglebot') !== -1 ) {
    toolBoxXml += gigglebot;
  }

  toolBoxXml += '</xml>';

  return toolBoxXml;
}

function getBeforeScript(extensions: Extension[]) {
  if (extensions.indexOf('scroll:bit') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'scrollbit', 'scrollbit.py'));
  }
  if (extensions.indexOf('gigglebot') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'gigglebot', 'gigglebot.py'));
  }
}

export {
  getToolBoxXml,
  getBeforeScript,
};

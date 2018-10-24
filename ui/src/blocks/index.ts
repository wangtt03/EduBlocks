import fs = require('fs');
import path = require('path');

import basicDefs from './basic/definitions';
import basicGens from './basic/generators';
basicDefs(Blockly.Blocks);
basicGens(Blockly.Python as any);
const basic = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));

import digitalDefs from './digital/definitions';
import digitalGens from './digital/generators';
digitalDefs(Blockly.Blocks);
digitalGens(Blockly.Python as any);
const digital = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'digital', 'toolbox.xml'));

import analogDefs from './analog/definitions';
import analogGens from './analog/generators';
analogDefs(Blockly.Blocks);
analogGens(Blockly.Python as any);
const analog = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'analog', 'toolbox.xml'));

import pwmDefs from './pwm/definitions';
import pwmGens from './pwm/generators';
pwmDefs(Blockly.Blocks);
pwmGens(Blockly.Python as any);
const pwm = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pwm', 'toolbox.xml'));

import servoDefs from './servo/definitions';
import servoGens from './servo/generators';
servoDefs(Blockly.Blocks);
servoGens(Blockly.Python as any);
const servo = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'servo', 'toolbox.xml'));

import audioDefs from './audio/definitions';
import audioGens from './audio/generators';
audioDefs(Blockly.Blocks);
audioGens(Blockly.Python as any);
const audio = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'audio', 'toolbox.xml'));

import touchDefs from './touch/definitions';
import touchGens from './touch/generators';
touchDefs(Blockly.Blocks);
touchGens(Blockly.Python as any);
const touch = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'touch', 'toolbox.xml'));

import neopixelDefs from './neopixel/definitions';
import neopixelGens from './neopixel/generators';
neopixelDefs(Blockly.Blocks);
neopixelGens(Blockly.Python as any);
const neopixel = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'neopixel', 'toolbox.xml'));

import advDefs from './advanced/definitions';
import advGens from './advanced/generators';
advDefs(Blockly.Blocks);
advGens(Blockly.Python as any);
const adv = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'advanced', 'toolbox.xml'));

import dotstarDefs from './dotstar/definitions';
import dotstarGens from './dotstar/generators';
dotstarDefs(Blockly.Blocks);
dotstarGens(Blockly.Python as any);
const dotstar = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'dotstar', 'toolbox.xml'));

import cpxDefs from './cpx/definitions';
import cpxGens from './cpx/generators';
cpxDefs(Blockly.Blocks);
cpxGens(Blockly.Python as any);
const cpx = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'cpx', 'toolbox.xml'));



import { Extension } from '../types';



function getToolBoxXml(extensions: Extension[]) {
  let toolBoxXml = '';

  toolBoxXml += '<xml>';

  toolBoxXml += basic;
  toolBoxXml += digital;
  toolBoxXml += analog;
  toolBoxXml += neopixel;
  toolBoxXml += touch;
  toolBoxXml += servo;
  toolBoxXml += audio;
  toolBoxXml += pwm;
  toolBoxXml += dotstar;
  toolBoxXml += adv;

  if (extensions.indexOf('Circuit Playground Easy') !== -1) {
    toolBoxXml += cpx;
}

  toolBoxXml += '</xml>';

  return toolBoxXml;
}


function getBeforeScript(extensions: Extension[]) {
  
  if (extensions.indexOf('Circuit Playground Easy') !== -1) {
    return fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'cpx', 'cpx.py'));
  }

}

export {
  getToolBoxXml,
  getBeforeScript,
};

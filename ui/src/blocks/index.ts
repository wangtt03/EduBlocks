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



function getToolBoxXml(extensions: Extension[]) {
  let toolBoxXml = '';

  toolBoxXml += '<xml>';

  toolBoxXml += basic;
  
  toolBoxXml += pins;

  toolBoxXml += '</xml>';

  return toolBoxXml;
}

function getBeforeScript(extensions: Extension[]) {
  
}

export {
  getToolBoxXml,
  getBeforeScript,
};

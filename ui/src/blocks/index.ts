import fs = require('fs');
import path = require('path');

let toolBoxXml = '';

toolBoxXml += '<xml>';

import basicDefs from './basic/definitions';
import basicGens from './basic/generators';
basicDefs(Blockly.Blocks);
basicGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));

import dotstarDefs from './dotstar/definitions';
import dotstarGens from './dotstar/generators';
dotstarDefs(Blockly.Blocks);
dotstarGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'dotstar', 'toolbox.xml'));

import pinsDefs from './pins/definitions';
import pinsGens from './pins/generators';
pinsDefs(Blockly.Blocks);
pinsGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pins', 'toolbox.xml'));

toolBoxXml += '</xml>';

function getToolBoxXml() {
  return toolBoxXml;
}

export {
  getToolBoxXml,
};

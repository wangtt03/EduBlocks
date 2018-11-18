import fs = require('fs');
import path = require('path');

let toolBoxXml = '';

toolBoxXml += '<xml>';

import basicDefs from './basic/definitions';
import basicGens from './basic/generators';
basicDefs(Blockly.Blocks);
basicGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));


import advancedDefs from './advanced/definitions';
import advancedGens from './advanced/generators';
advancedDefs(Blockly.Blocks);
advancedGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'advanced', 'toolbox.xml'));



import bitioDefs from './bitio/definitions';
import bitioGens from './bitio/generators';
bitioDefs(Blockly.Blocks);
bitioGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'bitio', 'toolbox.xml'));

import turtleDefs from './turtle/definitions';
import turtleGens from './turtle/generators';
turtleDefs(Blockly.Blocks);
turtleGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'turtle', 'toolbox.xml'));



toolBoxXml += '</xml>';

function getToolBoxXml() {
  return toolBoxXml;
}

export {
  getToolBoxXml,
};

import fs = require('fs');
import path = require('path');

let toolBoxXml = '';

toolBoxXml += '<xml>';

import basicDefs from './basic/definitions';
import basicGens from './basic/generators';
basicDefs(Blockly.Blocks);
basicGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));

import displayDefs from './display/definitions';
import displayGens from './display/generators';
displayDefs(Blockly.Blocks);
displayGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'display', 'toolbox.xml'));



toolBoxXml += '</xml>';

function getToolBoxXml() {
  return toolBoxXml;
}

export {
  getToolBoxXml,
};

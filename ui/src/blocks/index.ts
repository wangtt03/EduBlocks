import fs = require('fs');
import path = require('path');

let toolBoxXml = '';

toolBoxXml += '<xml>';

import basicDefs from './basic/definitions';
import basicGens from './basic/generators';
basicDefs(Blockly.Blocks);
basicGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'basic', 'toolbox.xml'));

import edupyDefs from './edupy/definitions';
import edupyGens from './edupy/generators';
edupyDefs(Blockly.Blocks);
edupyGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'edupy', 'toolbox.xml'));

import minecraftDefs from './minecraft/definitions';
import minecraftGens from './minecraft/generators';
minecraftDefs(Blockly.Blocks);
minecraftGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'minecraft', 'toolbox.xml'));

import sonicpiDefs from './sonicpi/definitions';
import sonicpiGens from './sonicpi/generators';
sonicpiDefs(Blockly.Blocks);
sonicpiGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'sonicpi', 'toolbox.xml'));

import pimoroniDefs from './pimoroni/definitions';
import pimoroniGens from './pimoroni/generators';
pimoroniDefs(Blockly.Blocks);
pimoroniGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'pimoroni', 'toolbox.xml'));

import advancedDefs from './advanced/definitions';
import advancedGens from './advanced/generators';
advancedDefs(Blockly.Blocks);
advancedGens(Blockly.Python as any);
toolBoxXml += fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'blocks', 'advanced', 'toolbox.xml'));

toolBoxXml += '</xml>';

function getToolBoxXml() {
  return toolBoxXml;
}

export {
  getToolBoxXml,
};

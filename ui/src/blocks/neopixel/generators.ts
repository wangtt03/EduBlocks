export default function define(Python: Blockly.BlockGenerators) {


  Python['setneo'] = function(block) {
    let variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    let text_inputneo = block.getFieldValue('inputneo');
    let code = variable_name+ ' = neopixel.NeoPixel(' +text_inputneo+ ')\n';
    return code;
  };

  Python['importneo'] = function(block) {
    let code = 'import neopixel\n';
    return code;
  };


  Python['neovar'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var text_neonum = block.getFieldValue('neonum');
    var text_colour = block.getFieldValue('colour');
    // TODO: Assemble Python into code variable.
    var code = variable_name+ '[' +text_neonum+ '] = (' +text_colour+ ')\n';
    return code;
  };

  Python['neoshow'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_name+ '.show()\n';
    return code;
  };

  Python['neoclear'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_name+ '.clear()\n';
    return code;
  };

}

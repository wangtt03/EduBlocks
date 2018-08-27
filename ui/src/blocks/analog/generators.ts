export default function define(Python: Blockly.BlockGenerators) {


  Python['import_analogio'] = function (block) {
    const code = 'from digitalio import *\n';
    return code;
  };


  Python['analog_in'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = AnalogIn(' +text_pinno+ ')\n';
    return code;
  };

  Python['analogpindirection'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_direction = block.getFieldValue('direction');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.direction = ' +text_direction+ '\n';
    return code;
  };

  Python['analogpinvalue'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var dropdown_value = block.getFieldValue('value');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.value = ' +dropdown_value+ '\n';
    return code;
  };

  Python['varinline'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_pin;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}

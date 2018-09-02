export default function define(Python: Blockly.BlockGenerators) {


  Python['import_digitalio'] = function (block) {
    const code = 'from digitalio import *\n';
    return code;
  };

  Python['pinconfig'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = DigitalInOut(' +text_pinno+ ')\n';
    return code;
  };

  Python['pindirection'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_direction = block.getFieldValue('direction');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.direction = ' +text_direction+ '\n';
    return code;
  };

  Python['pull'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_direction = block.getFieldValue('direction');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.pull = ' +text_direction+ '\n';
    return code;
  };

  Python['pinvalue'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_text = block.getFieldValue('text');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.value = ' +text_text+ '\n';
    return code;
  };

  Python['valuein'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_pin+'.value';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}

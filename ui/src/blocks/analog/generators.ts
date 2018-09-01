export default function define(Python: Blockly.BlockGenerators) {


  Python['import_analogio'] = function (block) {
    const code = 'from analogio import *\n';
    return code;
  };


  Python['analog_in'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = AnalogIn(' +text_pinno+ ')\n';
    return code;
  };

  

  Python['valinline'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_pin+".value";
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}

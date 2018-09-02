export default function define(Python: Blockly.BlockGenerators) {


  Python['import_servo'] = function (block) {
    const code = 'from adafruit_motor import servo\n';
    return code;
  };

  Python['servo_conf'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = DigitalInOut(' +text_pinno+ ')\n';
    return code;
  };

  Python['servo_value'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_angle = block.getFieldValue('angle');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.value = ' +text_angle+  '\n';
    return code;
  };

}

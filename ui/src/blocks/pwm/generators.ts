export default function define(Python: Blockly.BlockGenerators) {


  Python['import_pulseio'] = function (block) {
    const code = 'from pulseio import *\n';
    return code;
  };

  Python['import_simpleio'] = function (block) {
    const code = 'from simpleio import *\n';
    return code;
  };

  Python['pwm_conf'] = function(block) {
    var variable_pwm = Blockly.Python.variableDB_.getName(block.getFieldValue('pwm'), Blockly.Variables.NAME_TYPE);
    var text_pin = block.getFieldValue('pin');
    var text_dc = block.getFieldValue('dc');
    var text_fr = block.getFieldValue('fr');
    // TODO: Assemble Python into code variable.
    var code = variable_pwm+ ' = pulseio.PWMOut(' +text_pin+ ', duty_cycle=' +text_dc+ ', frequency=' +text_fr+ ')\n';
    return code;
  };

  Python['pwm_conf2'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = DigitalInOut(' +text_pinno+ ')\n';
    return code;
  };
  
  Python['simple_tone'] = function(block) {
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = 'simpleio.tone(' +text_pinno+ ')\n';
    return code;
  };

  Python['pwm_dc'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_direction = block.getFieldValue('direction');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.duty_cycle = ' +text_direction+ '\n';
    return code;
  };

  Python['pwm_freq'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_direction = block.getFieldValue('direction');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.frequency = ' +text_direction+ '\n';
    return code;
  };


}

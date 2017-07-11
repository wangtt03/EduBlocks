export default function define(Python: Blockly.BlockGenerators) {
  Python['importgpiozero'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'from gpiozero import *\n';
    return code;
  };

  Python['buttonset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = Button(' + text_pin + ')\n';
    return code;
  };

  Python['motionset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = MotionSensor(' + text_pin + ')\n';
    return code;
  };

  Python['lightset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = LightSensor(' + text_pin + ')\n';
    return code;
  };

  Python['distanceset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = DistanceSensor(' + text_pin + ')\n';
    return code;
  };

  Python['buttonaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['lineaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['motionaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['lightaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['distanceaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['buttonvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['motionvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['linevar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['lightvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['distancevar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['lineset'] = function (block) {
    const variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensor'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_sensor + ' = LineSensor(' + text_pin + ')\n';
    return code;
  };

}

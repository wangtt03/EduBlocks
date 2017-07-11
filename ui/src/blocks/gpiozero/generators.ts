export default function define(Python: Blockly.BlockGenerators) {
  Python['importgpiozero'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'from gpiozero import *\n';
  return code;
};

Python['buttonset'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_pin = block.getFieldValue('pin');
  // TODO: Assemble Python into code variable.
  var code = variable_name+ ' = Button(' +text_pin+ ')\n';
  return code;
};

Python['motionset'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_pin = block.getFieldValue('pin');
  // TODO: Assemble Python into code variable.
  var code = variable_name+ ' = MotionSensor(' +text_pin+ ')\n';
  return code;
};

Python['lightset'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_pin = block.getFieldValue('pin');
  // TODO: Assemble Python into code variable.
  var code = variable_name+ ' = LightSensor(' +text_pin+ ')\n';
  return code;
};

Python['distanceset'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_pin = block.getFieldValue('pin');
  // TODO: Assemble Python into code variable.
  var code = variable_name+ ' = DistanceSensor(' +text_pin+ ')\n';
  return code;
};

Python['buttonaction'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_action = block.getFieldValue('action');
  var text_bracket = block.getFieldValue('bracket');
  // TODO: Assemble Python into code variable.
  var code = variable_name+'.' +dropdown_action+ '(' +text_bracket+ ')\n';
  return code;
};

Python['lineaction'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_action = block.getFieldValue('action');
  var text_bracket = block.getFieldValue('bracket');
  // TODO: Assemble Python into code variable.
  var code = variable_name+'.' +dropdown_action+ '(' +text_bracket+ ')\n';
  return code;
};

Python['motionaction'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_action = block.getFieldValue('action');
  var text_bracket = block.getFieldValue('bracket');
  // TODO: Assemble Python into code variable.
  var code = variable_name+'.' +dropdown_action+ '(' +text_bracket+ ')\n';
  return code;
};

Python['lightaction'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_action = block.getFieldValue('action');
  var text_bracket = block.getFieldValue('bracket');
  // TODO: Assemble Python into code variable.
  var code = variable_name+'.' +dropdown_action+ '(' +text_bracket+ ')\n';
  return code;
};

Python['distanceaction'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var dropdown_action = block.getFieldValue('action');
  var text_bracket = block.getFieldValue('bracket');
  // TODO: Assemble Python into code variable.
  var code = variable_name+'.' +dropdown_action+ '(' +text_bracket+ ')\n';
  return code;
};

Python['buttonvar'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_action = block.getFieldValue('action');
  var text_act = block.getFieldValue('act');
  // TODO: Assemble Python into code variable.
  var code = variable_name+ '.' +text_action+ ' = ' +text_act + '\n';
  return code;
};

Python['motionvar'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_action = block.getFieldValue('action');
  var text_act = block.getFieldValue('act');
  // TODO: Assemble Python into code variable.
  var code = variable_name+ '.' +text_action+ ' = ' +text_act + '\n';
  return code;
};

Python['linevar'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_action = block.getFieldValue('action');
  var text_act = block.getFieldValue('act');
  // TODO: Assemble Python into code variable.
  var code = variable_name+ '.' +text_action+ ' = ' +text_act + '\n';
  return code;
};

Python['lightvar'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_action = block.getFieldValue('action');
  var text_act = block.getFieldValue('act');
  // TODO: Assemble Python into code variable.
  var code = variable_name+ '.' +text_action+ ' = ' +text_act + '\n';
  return code;
};

Python['distancevar'] = function(block) {
  var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var text_action = block.getFieldValue('action');
  var text_act = block.getFieldValue('act');
  // TODO: Assemble Python into code variable.
  var code = variable_name+ '.' +text_action+ ' = ' +text_act + '\n';
  return code;
};

Python['lineset'] = function(block) {
  var variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('sensor'), Blockly.Variables.NAME_TYPE);
  var text_pin = block.getFieldValue('pin');
  // TODO: Assemble Python into code variable.
  var code = variable_sensor + ' = LineSensor(' +text_pin+ ')\n';
  return code;
};

}

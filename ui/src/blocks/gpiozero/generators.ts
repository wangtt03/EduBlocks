export default function define(Python: Blockly.BlockGenerators) {
  Python['importgpiozero'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'from gpiozero import *\n';
    return code;
  };

  Python['buttonset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('button'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = Button(' + text_pin + ')\n';
    return code;
  }; 

  Python['motionset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motion'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = MotionSensor(' + text_pin + ')\n';
    return code;
  };

  Python['lightset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ldr'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = LightSensor(' + text_pin + ')\n';
    return code;
  };

  Python['distanceset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('distance'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = DistanceSensor(' + text_pin + ')\n';
    return code;
  };

  Python['ledset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = LED(' + text_pin + ')\n';
    return code;
  };

  Python['pledset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('pwm'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = PWMLED(' + text_pin + ')\n';
    return code;
  };
  
  Python['rgbledset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('rgb'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = RGBLED(' + text_pin + ')\n';
    return code;
  };

  Python['buzzerset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buzzer'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = Buzzer(' + text_pin + ')\n';
    return code;
  };

  Python['motorset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motor'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = Motor(' + text_pin + ')\n';
    return code;
  };

  Python['servoset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('servo'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = Servo(' + text_pin + ')\n';
    return code;
  };

  Python['angset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('angular'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = AngularServo(' + text_pin + ')\n';
    return code;
  };

  Python['ledbset'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('leds'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_name + ' = LEDBoard(' + text_pin + ')\n';
    return code;
  };

  Python['buttonaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('button'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['lineaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('line'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['motionaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motion'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['lightaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ldr'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['distanceaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('distance'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['ledaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['pledaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('pwm'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['rgbledaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('rgb'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['buzzeraction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buzzer'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['motoraction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motor'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['servoaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('servo'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['angaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('angular'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['ledbaction'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('leds'), Blockly.Variables.NAME_TYPE);
    const dropdown_action = block.getFieldValue('action');
    const text_bracket = block.getFieldValue('bracket');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + dropdown_action + '(' + text_bracket + ')\n';
    return code;
  };

  Python['buttonvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('button'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['motionvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motion'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['linevar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('line'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['lightvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('ldr'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['distancevar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('distance'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['ledvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['pledvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('pwm'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };
  
  Python['rgbledvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('rgb'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['buzzervar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('buzzer'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['motorvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('motor'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['servovar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('servo'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['angvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('angular'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['ledbvar'] = function (block) {
    const variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('leds'), Blockly.Variables.NAME_TYPE);
    const text_action = block.getFieldValue('action');
    const text_act = block.getFieldValue('act');
    // TODO: Assemble Python into code variable.
    const code = variable_name + '.' + text_action + ' = ' + text_act + '\n';
    return code;
  };

  Python['lineset'] = function (block) {
    const variable_sensor = Blockly.Python.variableDB_.getName(block.getFieldValue('line'), Blockly.Variables.NAME_TYPE);
    const text_pin = block.getFieldValue('pin');
    // TODO: Assemble Python into code variable.
    const code = variable_sensor + ' = LineSensor(' + text_pin + ')\n';
    return code;
  };

}

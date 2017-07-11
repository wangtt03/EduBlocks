export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['importgpiozero'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from gpiozero import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(60);
      this.setTooltip('Import the gpiozero library');
      this.setHelpUrl('http://gpiozero.readthedocs.io');
    },
  };

  Blocks['buttonset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'NAME')
        .appendField(' = Button(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };

  Blocks['motionset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'NAME')
        .appendField(' = MotionSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a MotionSensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#motion-sensor-d-sun-pir');
    },
  };

  Blocks['lightset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'NAME')
        .appendField(' = LightSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a Light Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

  Blocks['distanceset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'NAME')
        .appendField(' = DistanceSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a Distance Sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#distance-sensor-hc-sr04');
    },
  };

  Blocks['buttonaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'NAME')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_press', 'wait_for_press'], ['wait_for_release', 'wait_for_release']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };

  Blocks['lineaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('sensor'), 'NAME')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_line', 'wait_for_line'], ['wait_for_no_line', 'wait_for_no_line']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a line sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['motionaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'NAME')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_motion', 'wait_for_motion'], ['wait_for_no_motion', 'wait_for_no_motion']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a motion sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['lightaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'NAME')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_dark', 'wait_for_dark'], ['wait_for_light', 'wait_for_light']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a light sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

  Blocks['distanceaction'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'NAME')
        .appendField('.')
        .appendField(new Blockly.FieldDropdown([['wait_for_in_range', 'wait_for_in_range'], ['wait_for_out_of_range', 'wait_for_out_of_range']]), 'action')
        .appendField('(')
        .appendField(new Blockly.FieldTextInput(''), 'bracket')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set a variable for a distance sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#light-sensor-ldr');
    },
  };

  Blocks['buttonvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('button'), 'NAME')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a button');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#button');
    },
  };

  Blocks['motionvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('pir'), 'NAME')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a motion sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['linevar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('sensor'), 'NAME')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a line sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['lightvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('ldr'), 'NAME')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a light sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };


  Blocks['distancevar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('distance'), 'NAME')
        .appendField('.')
        .appendField(new Blockly.FieldTextInput(''), 'action')
        .appendField(' = ')
        .appendField(new Blockly.FieldTextInput(''), 'act');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Set an action variable for a Distance sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };

  Blocks['lineset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable('sensor'), 'sensor')
        .appendField(' = ')
        .appendField('LineSensor(')
        .appendField(new Blockly.FieldTextInput('pin'), 'pin')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(196);
      this.setTooltip('Setup a line sensor');
      this.setHelpUrl('https://gpiozero.readthedocs.io/en/stable/api_input.html#line-sensor-trct5000');
    },
  };
}

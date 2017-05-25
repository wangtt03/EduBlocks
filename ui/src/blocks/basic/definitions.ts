Blockly.Blocks['import_edupy'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('from edupy import *');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('Imports the edupy library.');
    this.setHelpUrl('http://www.example.com/');
  },
};

Blockly.Blocks['random'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('import random');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('Imports the random library.');
    this.setHelpUrl('http://www.example.com/');
  },
};

Blockly.Blocks['while_true'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('while True:');
    this.appendStatementInput('DO')
      .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('Forever loop.');
    this.setHelpUrl('https://t.co/PCZC5EFe4D');
  },
};

Blockly.Blocks['pass'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('pass');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('Pass to the next command');
    this.setHelpUrl('http://www.example.com/');
  },
};

Blockly.Blocks['if'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('if')
      .appendField(new Blockly.FieldTextInput('0'), 'var')
      .appendField(':');
    this.appendStatementInput('DO')
      .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('If Statement.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['varprint'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('print(')
      .appendField(new Blockly.FieldTextInput(''), 'var')
      .appendField(')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('Use this to print a variable.');
    this.setHelpUrl('http://www.example.com/');
  },
};

Blockly.Blocks['ifcroc'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('if')
      .appendField(new Blockly.FieldTextInput('this'), 'this')
      .appendField(new Blockly.FieldDropdown([['>', '>'], ['<', '<']]), 'crocsigns')
      .appendField(new Blockly.FieldTextInput('that'), 'that')
      .appendField(':');
    this.appendStatementInput('DO')
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('If statement with greater and less than');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['varminus'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput('0'), '1')
      .appendField('-=')
      .appendField(new Blockly.FieldTextInput('0'), '2');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('Variable with - and =');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['for'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('for')
      .appendField(new Blockly.FieldTextInput('i'), 'letter')
      .appendField('in range(')
      .appendField(new Blockly.FieldTextInput('number'), 'no')
      .appendField('):');
    this.appendStatementInput('DO')
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('Create a for loop');
  },
};

Blockly.Blocks['advancedforloops'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('for')
      .appendField(new Blockly.FieldTextInput('x'), 'x')
      .appendField('in')
      .appendField(new Blockly.FieldTextInput('y'), 'y');
    this.appendStatementInput('DO')
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['ifequals'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('if')
      .appendField(new Blockly.FieldTextInput('this'), 'this')
      .appendField('==')
      .appendField(new Blockly.FieldTextInput('that'), 'that');
    this.appendStatementInput('DO')
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['importinputs'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('import inputs');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['return2'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('return')
      .appendField(new Blockly.FieldTextInput(''), 'return');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['elif'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('elif')
      .appendField(new Blockly.FieldTextInput('0'), 'var')
      .appendField(':');
    this.appendStatementInput('DO')
      .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    this.setColour(336);
    this.setTooltip('Elif Statement.');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['else'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('else:');
    this.appendStatementInput('DO')
      .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(false, null);
    this.setColour(336);
    this.setTooltip('Else statement');
    this.setHelpUrl('https://t.co/PCZC5EFe4D');
  },
};

Blockly.Blocks['df'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput('def'), 'def')
      .appendField('()');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('Trigger a define function');
    this.setHelpUrl('');
  },
};

Blockly.Blocks['whileout'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('while')
      .appendField(new Blockly.FieldTextInput(''), '1')
      .appendField(':');
    this.appendStatementInput('DO')
      .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
};

Blockly.Blocks['time'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('import time');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('Imports the time library.');
    this.setHelpUrl('http://www.example.com/');
  },
};

Blockly.Blocks['import_math'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('import math');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('Imports the math library.');
    this.setHelpUrl('http://www.example.com/');
  },
};

Blockly.Blocks['sleep'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('time.sleep(')
      .appendField(new Blockly.FieldTextInput('1'), 'sleepTime')
      .appendField(')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('Wait for a given amount of seconds.');
    this.setHelpUrl('http://www.example.com/');
  },
};

Blockly.Blocks['print'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('print(\'')
      .appendField(new Blockly.FieldTextInput(''), 'print')
      .appendField('\')');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('Use this to print to the output box.');
    this.setHelpUrl('http://www.example.com/');
  },
};

Blockly.Blocks['equalsblock'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldTextInput('0'), '1')
      .appendField('=')
      .appendField(new Blockly.FieldTextInput('0'), '2');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
};

Blockly.Blocks['define'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('def ')
      .appendField(new Blockly.FieldTextInput(''), '1')
      .appendField('(')
      .appendField(new Blockly.FieldTextInput(''), '2')
      .appendField('):');
    this.appendStatementInput('DO')
      .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
};

Blockly.Blocks['greater'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('while')
      .appendField(new Blockly.FieldTextInput(''), '1')
      .appendField('>')
      .appendField(new Blockly.FieldTextInput(''), 'v')
      .appendField(':');
    this.appendStatementInput('DO')
      .appendField('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(336);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  },
};

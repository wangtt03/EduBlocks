export default function define(Blocks: Blockly.BlockDefinitions) {
  let pwmcol = "#FF4A60"
  Blocks['import_pulseio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import pulseio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
      this.setTooltip('Imports the PulseIO library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_simpleio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import simpleio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
      this.setTooltip('Imports the PulseIO library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['pwm_conf'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pwm"), "pwm")
          .appendField(" = pulseio.PWMOut(")
          .appendField(new Blockly.FieldTextInput("Board.D13"), "pin")
          .appendField(", duty_cycle=")
          .appendField(new Blockly.FieldTextInput(""), "dc")
          .appendField(", frequency = ")
          .appendField(new Blockly.FieldTextInput("50"), "fr")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pwm_conf2'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(" = pulseio.PWMOut(")
          .appendField(new Blockly.FieldTextInput(""), "pinno")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['simple_tone'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("simple.tone(")
          .appendField(new Blockly.FieldTextInput(""), "pinno")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pwm_dc'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".duty_cycle = ")
          .appendField(new Blockly.FieldTextInput(""), "direction");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pwm_freq'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".frequency = ")
          .appendField(new Blockly.FieldTextInput(""), "direction");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(pwmcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };


}
export default function define(Blocks: Blockly.BlockDefinitions) {
  let digitalcol = "#2C97DF"
  Blocks['sdfsdf'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from analogio import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
      this.setTooltip('Imports the DigitalIO library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['sdfsdfs'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(" = AnalogIn(")
          .appendField(new Blockly.FieldTextInput("board.A1"), "pinno")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pindirection'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".direction = ")
          .appendField(new Blockly.FieldTextInput(""), "direction");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['pinvalue'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".value = ")
          .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "value");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['sdfsdfsdf'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin");
      this.setOutput(true, null);
      this.setColour(digitalcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

}
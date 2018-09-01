export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['import_analogio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from analogio import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E67D21");
      this.setTooltip('Imports the DigitalIO library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['analog_in'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(" = AnalogIn(")
          .appendField(new Blockly.FieldTextInput("board.A1"), "pinno")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#E67D21");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['valinline'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".value");
      this.setOutput(true, null);
      this.setColour("#E67D21");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

}
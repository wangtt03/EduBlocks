export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['scrollbit_import'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from scrollbit import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip('Imports the scroll:bit library');
      this.setHelpUrl('https://github.com/pimoroni/micropython-scrollbit');
    },
  };

  Blocks['scrollbit_scroll'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("scroll(")
          .appendField(new Blockly.FieldTextInput("\"Hello World\""), "input")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Scroll text on scroll:bit");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };

  Blocks['scrollbit_write'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("write(")
          .appendField(new Blockly.FieldTextInput("\"Hi!\""), "input")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Write text on scroll:bit");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };

  Blocks['scrollbit_draw'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("draw_icon(")
          .appendField(new Blockly.FieldTextInput("col"), "col")
          .appendField(", ")
          .appendField(new Blockly.FieldTextInput("row"), "row")
          .appendField(", ")
          .appendField(new Blockly.FieldTextInput("icon"), "icon")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Draw an Icon");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };

  Blocks['scrollbit_pixel'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("set_pixel(")
          .appendField(new Blockly.FieldTextInput("col"), "col")
          .appendField(", ")
          .appendField(new Blockly.FieldTextInput("row"), "row")
          .appendField(", ")
          .appendField(new Blockly.FieldTextInput("255"), "bright")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Set a pixel");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };

  Blocks['scrollbit_show'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("show()")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Show text on scroll:bit");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };

  Blocks['scrollbit_clear'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("clear()")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
   this.setTooltip("Clear text on scroll:bit");
   this.setHelpUrl("https://github.com/pimoroni/micropython-scrollbit");
    }
  };
}
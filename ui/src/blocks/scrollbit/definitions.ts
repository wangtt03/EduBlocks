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
}
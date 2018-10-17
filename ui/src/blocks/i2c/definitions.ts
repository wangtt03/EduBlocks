export default function define(Blocks: Blockly.BlockDefinitions) {
  let digitalcol = "#2C97DF"
  Blocks['import_digitaliodfgdfgdfgd'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from digitalio import *');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(digitalcol);
      this.setTooltip('Imports the DigitalIO library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

 

}
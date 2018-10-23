export default function define(Blocks: Blockly.BlockDefinitions) {
  let advcol = "#22a6b3"
  Blocks['import_micro'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import microcontroller');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(advcol);
      this.setTooltip('Imports the microcontroller library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['cputemp'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("microcontroller.cpu.temperature");
      this.setOutput(true, null);
      this.setColour(advcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

 

}
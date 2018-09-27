export default function define(Blocks: Blockly.BlockDefinitions) {

    Blocks['variables_get'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldVariable("var"), "VAR");
          this.setOutput(true, null);
          this.setColour("#ff0066","#ff0066","#ff0066");
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };

      Blocks['variables_set'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldVariable("var"), "VAR")
              .appendField(" = ");
          this.appendValueInput("NAME")
              .setCheck(null);
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#ff0066","#ff0066","#ff0066");
       this.setTooltip("");
       this.setHelpUrl("");
        }
      };

    

}
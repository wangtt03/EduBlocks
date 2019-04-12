export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['operators2'] = {
    init: function() {
      this.appendValueInput("first")
          .setCheck(null);
      this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["+","+"], ["-","-"], ["/","/"], ["%","%"], ["*","*"]]), "operators");
      this.appendValueInput("last")
          .setCheck(null);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setOutputShape(Blockly.OUTPUT_SHAPE_ROUND);
      this.setColour("#1B173D");
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };

}


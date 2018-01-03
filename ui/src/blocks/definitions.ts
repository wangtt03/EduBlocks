export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['accisgesture'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("accelerometer.is_gesture(")
          .appendField(new Blockly.FieldTextInput(""), "gesture")
          .appendField(")");
      this.setOutput(true, null);
      this.setColour(30);
   this.setTooltip("If the gesture is this, then do this");
   this.setHelpUrl("");
    }
  };

  Blocks['accwasgesture'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("accelerometer.was_gesture(")
          .appendField(new Blockly.FieldTextInput(""), "gesture1")
          .appendField(")");
      this.setOutput(true, null);
      this.setColour(30);
   this.setTooltip("If the gesture was this, then do this");
   this.setHelpUrl("");
    }
  };

}
export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['accisgesturenew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("accelerometer.is_gesture(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true); 
      this.setOutput(true, null);
      this.setColour("#E57E16","#E57E16","#b87533");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['accisgesture'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('accelerometer.is_gesture(')
        .appendField(new Blockly.FieldTextInput(""), "gesture1")
        .appendField(')');
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour("#E57E16","#E57E16","#b87533");
      this.setTooltip('If the gesture is this, then do this');
      this.setHelpUrl('');
    },
  };


  Blocks['accwasgesturenew'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("accelerometer.was_gesture(");
      this.appendValueInput("text")
          .setCheck(null);
      this.appendDummyInput()
          .appendField(")");
      this.setInputsInline(true); 
      this.setOutput(true, null);
      this.setColour("#E57E16","#E57E16","#b87533");
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['accwasgesture'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('accelerometer.was_gesture(')
        .appendField(new Blockly.FieldTextInput(""), "gesture2")
        .appendField(')');
      this.setInputsInline(false);
      this.setOutput(true, null);
      this.setColour("#E57E16","#E57E16","#b87533");
      this.setTooltip('If the gesture is this, then do this');
      this.setHelpUrl('');
    },
  };


}
export default function define(Blocks: Blockly.BlockDefinitions) {
  let touchcol = "#E84C3D"
  Blocks['import_touchio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import touchio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(touchcol);
      this.setTooltip('Imports the TouchIO library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['touch_conf'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("touch1"), "pin")
          .appendField(" = touchio.TouchIn(")
          .appendField(new Blockly.FieldTextInput("board.A1"), "pinno")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(touchcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['touch_valinline'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("pin"), "pin")
          .appendField(".value");
      this.setOutput(true, null);
      this.setColour(touchcol);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

}
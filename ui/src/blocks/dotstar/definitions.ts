export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['import_dotstar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import adafruit_dotstar');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Scroll a Message');
      this.setHelpUrl('');
    },
  };

  Blocks['vardotstar'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("led"), "led")
          .appendField(" = adafruit_dotstar.DotStar(")
          .appendField(new Blockly.FieldTextInput(""), "input")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['ledfill'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("led"), "led")
          .appendField(".fill(")
          .appendField(new Blockly.FieldTextInput(""), "input")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['dsbrightness'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("led"), "led")
          .appendField(".brightness = ")
          .appendField(new Blockly.FieldTextInput(""), "brightness");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };

  Blocks['dsvar'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldVariable("led"), "led")
          .appendField("[")
          .appendField(new Blockly.FieldTextInput(""), "neonum")
          .appendField("] = (")
          .appendField(new Blockly.FieldTextInput(""), "colour")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
   this.setTooltip("Set Neopixel Colour");
   this.setHelpUrl("");
    }
  };

}
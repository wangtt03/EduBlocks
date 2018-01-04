export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['scroll'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.scroll("')
        .appendField(new Blockly.FieldTextInput('Hello World'), 'message')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Scroll a Message');
      this.setHelpUrl('');
    },
  };

  Blocks['scrollvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.scroll(')
        .appendField(new Blockly.FieldTextInput(''), 'message')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Scroll a variable');
      this.setHelpUrl('');
    },
  };

  Blocks['image'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.show(')
        .appendField(new Blockly.FieldTextInput(''), 'image')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Display an image');
      this.setHelpUrl('');
    },
  };

  Blocks['getpixel'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.get_pixel(')
        .appendField(new Blockly.FieldTextInput(''), 'xy')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Gets a pixel value');
      this.setHelpUrl('');
    },
  };

  Blocks['setpixel'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.set_pixel(')
        .appendField(new Blockly.FieldTextInput(''), 'setpix')
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Set a pixel');
      this.setHelpUrl('');
    },
  };

  Blocks['radiosend'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('radio.send("')
        .appendField(new Blockly.FieldTextInput(''), 'send')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Set a pixel');
      this.setHelpUrl('');
    },
  };

  Blocks['disclear'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('display.clear()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Clear the display');
      this.setHelpUrl('');
    },
  };

  Blocks['imradio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import radio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Clear the display');
      this.setHelpUrl('');
    },
  };

  Blocks['radioon'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('radio.on()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(70);
      this.setTooltip('Clear the display');
      this.setHelpUrl('');
    },
  };

  Blocks['disonoff'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("display.")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "NAME")
        .appendField("()");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(70);
 this.setTooltip("Turn the display on/off");
 this.setHelpUrl("");
  }
};

Blocks['imagecreate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput(""), "var")
        .appendField("= Image(\"")
        .appendField(new Blockly.FieldTextInput(""), "11")
        .appendField(new Blockly.FieldTextInput(""), "12")
        .appendField(new Blockly.FieldTextInput(""), "13")
        .appendField(new Blockly.FieldTextInput(""), "14")
        .appendField(new Blockly.FieldTextInput(""), "15")
        .appendField(":\"");
    this.appendDummyInput()
        .appendField("                  \"")
        .appendField(new Blockly.FieldTextInput(""), "21")
        .appendField(new Blockly.FieldTextInput(""), "22")
        .appendField(new Blockly.FieldTextInput(""), "23")
        .appendField(new Blockly.FieldTextInput(""), "24")
        .appendField(new Blockly.FieldTextInput(""), "25")
        .appendField(":\"");
    this.appendDummyInput()
        .appendField("                  \"")
        .appendField(new Blockly.FieldTextInput(""), "31")
        .appendField(new Blockly.FieldTextInput(""), "32")
        .appendField(new Blockly.FieldTextInput(""), "33")
        .appendField(new Blockly.FieldTextInput(""), "34")
        .appendField(new Blockly.FieldTextInput(""), "35")
        .appendField(":\"");
    this.appendDummyInput()
        .appendField("                  \"")
        .appendField(new Blockly.FieldTextInput(""), "41")
        .appendField(new Blockly.FieldTextInput(""), "42")
        .appendField(new Blockly.FieldTextInput(""), "43")
        .appendField(new Blockly.FieldTextInput(""), "44")
        .appendField(new Blockly.FieldTextInput(""), "45")
        .appendField(":\"");
    this.appendDummyInput()
        .appendField("                  \"")
        .appendField(new Blockly.FieldTextInput(""), "51")
        .appendField(new Blockly.FieldTextInput(""), "52")
        .appendField(new Blockly.FieldTextInput(""), "53")
        .appendField(new Blockly.FieldTextInput(""), "54")
        .appendField(new Blockly.FieldTextInput(""), "55")
        .appendField("\")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(75);
 this.setTooltip("Create a custom image");
 this.setHelpUrl("");
  }
};

}
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
        .appendField(new Blockly.FieldTextInput("image"), "image")
        .appendField(" = (\"")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "1")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "2")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "3")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "4")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "5")
        .appendField(":\"");
    this.appendDummyInput()
        .appendField("                  ")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "6")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "7")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "8")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "9")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "10")
        .appendField(":\"");
    this.appendDummyInput()
        .appendField("                  ")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "11")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "12")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "13")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "14")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "15")
        .appendField(":\"");
    this.appendDummyInput()
        .appendField("                  ")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "16")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "17")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "18")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "19")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "20")
        .appendField(":\"");
    this.appendDummyInput()
        .appendField("                  ")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "16")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "17")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "18")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "19")
        .appendField(new Blockly.FieldNumber(0, 0, 9), "20")
        .appendField("\")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(70);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

}
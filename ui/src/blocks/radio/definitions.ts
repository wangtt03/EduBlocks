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
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
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
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
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
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
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
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
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
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
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
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
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
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
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
      this.setHelpUrl('https://docs.python.org/3/library/http.client.html');
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



}
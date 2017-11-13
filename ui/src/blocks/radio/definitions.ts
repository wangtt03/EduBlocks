export default function define(Blocks: Blockly.BlockDefinitions) {


  Blocks['radiosend'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('radio.send("')
        .appendField(new Blockly.FieldTextInput(''), 'send')
        .appendField('")');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip('Send a radio command');
      this.setHelpUrl('');
    },
  };

  

  Blocks['imradio'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import radio');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip('Import Radio');
      this.setHelpUrl('');
    },
  };

  Blocks['radioon'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('radio.on()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(90);
      this.setTooltip('Turn Radio On');
      this.setHelpUrl('');
    },
  };





}
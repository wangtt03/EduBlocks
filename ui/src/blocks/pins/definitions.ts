export default function define(Blocks: Blockly.BlockDefinitions) {

  Blocks['pintouched'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
          .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"]]), "NAME")
          .appendField(".is_touched()");
      this.setOutput(true, null);
      this.setColour(0);
   this.setTooltip("If this pin is touched");
   this.setHelpUrl("");
    }
  };
  
  Blocks['analogread'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
          .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["10","10"]]), "NAME")
          .appendField(".read_analog()");
      this.setOutput(true, null);
      this.setColour(0);
   this.setTooltip("Read Analog");
   this.setHelpUrl("");
    }
  };

  Blocks['digitalread'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
          .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["10","10"]]), "NAME")
          .appendField(".read_digital()");
      this.setOutput(true, null);
      this.setColour(0);
   this.setTooltip("Read Digital");
   this.setHelpUrl("");
    }
  };

  Blocks['writeanalog'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
          .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["10","10"]]), "NAME")
          .appendField(".write_analog(")
          .appendField(new Blockly.FieldTextInput(""), "analog")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Write Analog");
   this.setHelpUrl("");
    }
  };

  Blocks['writedigital'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("pin")
          .appendField(new Blockly.FieldDropdown([["0","0"], ["1","1"], ["2","2"], ["3","3"], ["4","4"], ["10","10"]]), "NAME")
          .appendField(".write_digital(")
          .appendField(new Blockly.FieldTextInput(""), "digital")
          .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(0);
   this.setTooltip("Write Digital");
   this.setHelpUrl("");
    }
  };

}
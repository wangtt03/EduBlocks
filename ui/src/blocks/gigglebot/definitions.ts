export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['import_gigglebot'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("from gigglebot import *");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("Imports gigglebot");
       this.setHelpUrl("");
        }
      };
 
    Blocks['drive_x_seconds'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("drive (")
              .appendField(new Blockly.FieldDropdown([["FORWARD","FORWARD"], ["BACKWARD","BACKWARD"]]), "dir")
              .appendField(", seconds=")
              .appendField(new Blockly.FieldNumber(0, 0), "seconds")
              .appendField(")");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("Setting the delay to -1 means the robot will drive until otherwise interrupted.");
       this.setHelpUrl("");
        }
      };

    Blocks['turn_x_seconds'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("turn (")
              .appendField(new Blockly.FieldDropdown([["LEFT","LEFT"], ["RIGHT","RIGHT"]]), "dir")
              .appendField(", seconds=")
              .appendField(new Blockly.FieldNumber(0, 0), "seconds")
              .appendField(")");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("Setting the delay to -1 means the robot will turn until otherwise interrupted.");
       this.setHelpUrl("");
        }
      };

    Blocks['stop'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("stop()");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("Stops the GiggleBot");
       this.setHelpUrl("");
        }
      };
}
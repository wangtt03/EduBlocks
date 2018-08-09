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

    Blocks['drive'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("drive (")
              .appendField(new Blockly.FieldDropdown([["FORWARD","FORWARD"], ["BACKWARD","BACKWARD"]]), "dir")
              .appendField(")");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("The robot will drive until otherwise interrupted.");
       this.setHelpUrl("");
        }
      };

    Blocks['drive_x_seconds'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("drive (")
              .appendField(new Blockly.FieldDropdown([["FORWARD","FORWARD"], ["BACKWARD","BACKWARD"]]), "dir")
              .appendField(", seconds=");
          this.appendValueInput("seconds")
              .setCheck(null);
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("Setting the delay to -1 means the robot will drive until otherwise interrupted.");
       this.setHelpUrl("");
        }
      };

    Blocks['turn'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("turn (")
              .appendField(new Blockly.FieldDropdown([["LEFT","LEFT"], ["RIGHT","RIGHT"]]), "dir")
              .appendField(")");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("The robot will turn until otherwise interrupted.");
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

      Blocks['set_speed'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("set_speed( power_left=")
              .appendField(new Blockly.FieldNumber(0, 0), "power_left")
              .appendField(", power_right=")
              .appendField(new Blockly.FieldNumber(0, 0), "power_right")
              .appendField(")");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("Adjusts the speed of each motor");
       this.setHelpUrl("");
        }
      };

      Blocks['set_servo'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("set_servo(")
              .appendField(new Blockly.FieldDropdown([["LEFT","LEFT"], ["RIGHT","RIGHT"], ["BOTH","BOTH"]]), "which")
              .appendField(", degrees=")
              .appendField(new Blockly.FieldNumber(0, 0), "degrees")
              .appendField(")");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("Controls one or both of the servos");
       this.setHelpUrl("");
        }
      };

      Blocks['servo_off'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("servo_off(")
              .appendField(new Blockly.FieldDropdown([["LEFT","LEFT"], ["RIGHT","RIGHT"], ["BOTH","BOTH"]]), "which")
              .appendField(")");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("Removes power from one or both servos ");
       this.setHelpUrl("");
        }
      };


      Blocks['set_smile'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("set_smile( R=")
              .appendField(new Blockly.FieldNumber(0, 0), "R")
              .appendField(", G=")
              .appendField(new Blockly.FieldNumber(0, 0), "G")
              .appendField(", B=")
              .appendField(new Blockly.FieldNumber(0, 0), "B")
              .appendField(")");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("Sets colour for the smile");
       this.setHelpUrl("");
        }
      };

      Blocks['set_eyes'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("set_eyes(")
              .appendField(new Blockly.FieldDropdown([["LEFT","LEFT"], ["RIGHT","RIGHT"], ["BOTH","BOTH"]]), "which")
              .appendField(", R=")
              .appendField(new Blockly.FieldNumber(0, 0), "R")
              .appendField(", G=")
              .appendField(new Blockly.FieldNumber(0, 0), "G")
              .appendField(", B=")
              .appendField(new Blockly.FieldNumber(0, 0), "B")
              .appendField(")");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour(21);
       this.setTooltip("Sets colour for each eye");
       this.setHelpUrl("");
        }
      };


      Blocks['read_sensor'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("read_sensor(")
              .appendField(new Blockly.FieldDropdown([["GET_LINE_SENSORS","GET_LINE_SENSORS"], ["GET_LIGHT_SENSORS","GET_LIGHT_SENSORS"]]), "sensor")
              .appendField(new Blockly.FieldDropdown([["LEFT","LEFT"], ["RIGHT","RIGHT"], ["BOTH","BOTH"]]), "which")
              .appendField(")");
          this.setOutput(true, "Number");
          this.setColour(21);
       this.setTooltip("Get a reading from line sensors or light sensors ");
       this.setHelpUrl("");
        }
      };

      Blocks['volt'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("volt()");
          this.setOutput(true, "Number");
          this.setColour(21);
       this.setTooltip("Gets a level reading from the batteries");
       this.setHelpUrl("");
        }
      };
}
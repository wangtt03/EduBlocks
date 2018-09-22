export default function define(Blocks: Blockly.BlockDefinitions) {

    Blocks['compasscalibrate'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("compass.calibrate()");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#A016E5","#A016E5","#A016E5");
       this.setTooltip("Calibrate the compass module");
       this.setHelpUrl("");
        }
    };

    Blocks['compasscalibrated'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("compass.is_calibrated()");
          this.setOutput(true, null);
          this.setColour("#A016E5","#A016E5","#A016E5");
       this.setTooltip("Is the compass calibrated?");
       this.setHelpUrl("");
        }
      };

}
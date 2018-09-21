export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['import_envirobit'] = {
        init: function() {
            this.appendDummyInput()
                .appendField("from envirobit import *");
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour(230);
            this.setTooltip("");
            this.setHelpUrl("");
        },
    };
}

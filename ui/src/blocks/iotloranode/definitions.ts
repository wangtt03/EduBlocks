export default function define(Blocks: Blockly.BlockDefinitions) {
    Blocks['import_iotloranode'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("from iotloranode import loraNode");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a","#8bc34a","#8bc34a");
       this.setTooltip("Imports iotloranode");
       this.setHelpUrl("");
        }
      };
    
      Blocks['lora_init'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(" = loraNode()");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a","#8bc34a","#8bc34a");
       this.setTooltip("Initalize the LoRa Node");
       this.setHelpUrl("");
        }
      };

      Blocks['lora_devadd'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(".set_devAddr(");
          this.appendValueInput("address")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a","#8bc34a","#8bc34a");
       this.setTooltip("Set LoRa Dev Address");
       this.setHelpUrl("");
        }
      };
      
      Blocks['quote_shadow'] = {
        init: function() {
          this.appendDummyInput()
              .appendField("\"")
              .appendField(new Blockly.FieldTextInput(""), "add")
              .appendField("\"");
          this.setOutput(true, null);
          this.setColour("#8bc34a","#8bc34a","#8bc34a");
       this.setHelpUrl("");
        }
      };

      Blocks['lora_netkey'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(".set_networkKey(");
          this.appendValueInput("address")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a","#8bc34a","#8bc34a");
       this.setTooltip("Set LoRa Net Key");
       this.setHelpUrl("");
        }
      };

      Blocks['lora_appkey'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField("set_appSessionKey(");
          this.appendValueInput("address")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a","#8bc34a","#8bc34a");
       this.setTooltip("Set LoRa App Key");
       this.setHelpUrl("");
        }
      };

      Blocks['lora_join'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(".join(")
              .appendField(new Blockly.FieldVariable("node"), "node1")
              .appendField(".adp)");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a","#8bc34a","#8bc34a");
       this.setTooltip("LoRa Join Command");
       this.setHelpUrl("");
        }
      };

      Blocks['lora_sendstring'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldVariable("node"), "node")
              .appendField(".send_string_packet(");
          this.appendValueInput("address")
              .setCheck(null);
          this.appendDummyInput()
              .appendField(")");
          this.setInputsInline(true);
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setColour("#8bc34a","#8bc34a","#8bc34a");
       this.setTooltip("Set LoRa App Key");
       this.setHelpUrl("");
        }
      };
      
}

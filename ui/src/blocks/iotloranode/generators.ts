export default function define(Python: Blockly.BlockGenerators) {
    Python['import_iotloranode'] = function(block) {
        // TODO: Assemble Python into code variable.
        var code = 'from iotloranode import loraNode\n';
        return code;
    };

    Python['lora_init'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble Python into code variable.
        var code = variable_node + ' = loraNode()\n';
        return code;
    };

    Python['quote_shadow'] = function(block) {
        var text_add = block.getFieldValue('add');
        // TODO: Assemble Python into code variable.
        var code = '...';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
    };

    Python['lora_devadd'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        var value_address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_node+'.set_devAddr(' +value_address+ ')\n';
        return code;
    };

    Python['lora_netkey'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        var value_address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_node+'.set_networkKey(' +value_address+ ')\n';
        return code;
    };

    Python['lora_appkey'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        var value_address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_node+'.set_networkKey(' +value_address+ ')\n';
        return code;
    };

    Python['lora_join'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        // TODO: Assemble Python into code variable.
        var code = variable_node = '.join(' +variable_node+ '.adp)\n';
        return code;
    };

    Python['lora_sendstring'] = function(block) {
        var variable_node = Blockly.Python.variableDB_.getName(block.getFieldValue('node'), Blockly.Variables.NAME_TYPE);
        var value_address = Blockly.Python.valueToCode(block, 'address', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = variable_node+'.send_string_packet(' +value_address+ ')\n';
        return code;
    };
}

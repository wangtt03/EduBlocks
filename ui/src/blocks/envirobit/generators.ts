export default function define(Python: Blockly.BlockGenerators) {
    Python['import_envirobit'] = function(block) {
        var code = 'from envirobit import *\n';
        return code;
    };

    Python['temperature'] = function(block) {
        // TODO: Assemble Python into code variable.
        var code = 'temperature()';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
      };

      Python['pressure'] = function(block) {
        // TODO: Assemble Python into code variable.
        var code = 'pressure()';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
      };

      Python['humidity'] = function(block) {
        // TODO: Assemble Python into code variable.
        var code = 'humidity()';
        // TODO: Change ORDER_NONE to the correct strength.
        return [code, Blockly.Python.ORDER_ATOMIC];
      };

    
} 

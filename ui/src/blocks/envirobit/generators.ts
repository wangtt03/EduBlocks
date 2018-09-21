export default function define(Python: Blockly.BlockGenerators) {
    Python['import_envirobit'] = function(block) {
        var code = 'from envirobit import *\n';
        return code;
    };
}

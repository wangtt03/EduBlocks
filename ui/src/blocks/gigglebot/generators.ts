export default function define(Python: Blockly.BlockGenerators) {
    Python['import_gigglebot'] = function(block) {
        // TODO: Assemble Python into code variable.
        var code = '';
        return code;
    };

    Python['drive_x_seconds'] = function(block) {
        var dropdown_dir = block.getFieldValue('dir');
        var number_seconds = block.getFieldValue('seconds');
        var code = 'drive('+dropdown_dir+', seconds='+number_seconds+')\n';
        return code;
    };

    Python['turn_x_seconds'] = function(block) {
        var dropdown_dir = block.getFieldValue('dir');
        var number_seconds = block.getFieldValue('seconds');
        var code = 'turn('+dropdown_dir+', seconds='+number_seconds+')\n';
        return code;
    };
    Python['stop'] = function(block) {
        // TODO: Assemble Python into code variable.
        var code = 'stop()\n';
        return code;
    };
}
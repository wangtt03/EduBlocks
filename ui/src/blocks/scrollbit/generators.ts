export default function define(Python: Blockly.BlockGenerators) {

  Python['scrollbit_import'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = '';
    return code;
  };

  Python['scrollbit_scroll'] = function(block) {
    var text_input = block.getFieldValue('input');
    // TODO: Assemble Python into code variable.
    var code = 'scroll(' +text_input+ ')\n';
    return code;
  };

  Python['scrollbit_write'] = function(block) {
    var text_input = block.getFieldValue('input');
    // TODO: Assemble Python into code variable.
    var code = 'write(' +text_input+ ')\n';
    return code;
  };

  Python['scrollbit_draw'] = function(block) {
    var text_col = block.getFieldValue('col');
    var text_row = block.getFieldValue('row');
    var text_icon = block.getFieldValue('icon');
    // TODO: Assemble Python into code variable.
    var code = 'draw_icon(' +text_col+ ', ' +text_row+ ', ' +text_icon+ ')\n';
    return code;
  };

  Python['scrollbit_pixel'] = function(block) {
    var text_col = block.getFieldValue('col');
    var text_row = block.getFieldValue('row');
    var text_bright = block.getFieldValue('bright');
    // TODO: Assemble Python into code variable.
    var code = 'set_pixel(' +text_col+ ', ' +text_row+ ', ' +text_bright+ ')\n';
    return code;
  };

  Python['scrollbit_show'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'show()\n';
    return code;
  };

  Python['scrollbit_clear'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'clear()\n';
    return code;
  };
}

export default function define(Python: Blockly.BlockGenerators) {

  Python['scrollbit_import'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'import scrollbit\n';
    return code;
  };

  Python['scrollbit_scroll'] = function(block) {
    var text_input = block.getFieldValue('input');
    // TODO: Assemble Python into code variable.
    var code = 'scrollbit.scroll(' +text_input+ ')\n';
    return code;
  };

  Python['scrollbit_show'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'scrollbit.show()\n';
    return code;
  };
}

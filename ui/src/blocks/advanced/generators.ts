export default function define(Python: Blockly.BlockGenerators) {

  Python['import_micro'] = function (block) {
    const code = 'import microcontroller\n';
    return code;
  };

  Python['cputemp'] = function(block) {
    var code = 'microcontroller.cpu.temperature';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}

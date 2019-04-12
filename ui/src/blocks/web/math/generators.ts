export default function define(Python: Blockly.BlockGenerators) {
  Python['operators2'] = function(block) {
    var value_first = Blockly.Python.valueToCode(block, 'first', Blockly.Python.ORDER_ATOMIC);
    var text_choose = block.getFieldValue('operators');
    var value_last = Blockly.Python.valueToCode(block, 'last', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = value_first+ ' ' +text_choose+ ' ' +value_last;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
}

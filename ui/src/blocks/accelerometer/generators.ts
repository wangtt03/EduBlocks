export default function define(Python: Blockly.BlockGenerators) {

  Python['accisgesturenew'] = function (block) {
    var text_gesture1 = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || "'shake'";
    const code = 'accelerometer.is_gesture(' +text_gesture1+ ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['accisgesture'] = function (block) {
    const text_gesture1 = block.getFieldValue('gesture1');
    const code = 'accelerometer.is_gesture(' +text_gesture1+ ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['accwasgesturenew'] = function (block) {
    var text_gesture2 = Blockly.Python.valueToCode(block, 'text', Blockly.Python.ORDER_ATOMIC)
    || "'shake'";
    const code = 'accelerometer.was_gesture(' +text_gesture2+ ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['accwasgesture'] = function (block) {
    const text_gesture2 = block.getFieldValue('gesture2');
    const code = 'accelerometer.was_gesture(' +text_gesture2+ ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}

export default function define(Python: Blockly.BlockGenerators) {

  Python['accisgesture'] = function (block) {
    const text_gesture1 = block.getFieldValue('gesture1');
    const code = 'accelerometer.is_gesture(' +text_gesture1+ ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['accwasgesture'] = function (block) {
    const text_gesture2 = block.getFieldValue('gesture2');
    const code = 'accelerometer.was_gesture(' +text_gesture2+ ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}

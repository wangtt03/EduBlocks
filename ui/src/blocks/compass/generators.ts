export default function define(Python: Blockly.BlockGenerators) {

  Python['compasscalibrate'] = function(block) {
    // TODO: Assemble Python into code variable.
    var code = 'compass.calibrate()\n';
    return code;
  };

  Python['compasscalibrated'] = function(block) {
    var code = 'compass.is_calibrated()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

}

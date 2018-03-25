export default function define(Python: Blockly.BlockGenerators) {


  Python['pintouched'] = function(block) {
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = 'pin'+text_pinno+'.is_touched()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['analogread'] = function(block) {
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = 'pin'+text_pinno+'.read_anaglog()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['digitalread'] = function(block) {
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = 'pin'+text_pinno+'.read_digital()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['writeanalog'] = function(block) {
    var text_pinno = block.getFieldValue('pinno');
    var text_analog = block.getFieldValue('analog');
    // TODO: Assemble Python into code variable.
    var code = 'pin' +text_pinno+ '.write_analog(' +text_analog+ ')\n';
    return code;
  };
  
  Python['writedigital'] = function(block) {
    var text_pinno = block.getFieldValue('pinno');
    var text_digital = block.getFieldValue('digital');
    // TODO: Assemble Python into code variable.
    var code = 'pin' +text_pinno+ '.write_digital(' +text_digital+ ')\n';
    return code;
  };
}

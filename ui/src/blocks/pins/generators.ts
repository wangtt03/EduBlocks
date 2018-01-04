export default function define(Python: Blockly.BlockGenerators) {


  Python['pintouched'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = 'pin'+dropdown_name+'.is_touched()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['analogread'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = 'pin'+dropdown_name+'.read_anaglog()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['digitalread'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = 'pin'+dropdown_name+'.read_digital()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Python.ORDER_ATOMIC];
  };

  Python['writeanalog'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var text_analog = block.getFieldValue('analog');
    // TODO: Assemble Python into code variable.
    var code = 'pin' +dropdown_name+ '.write_analog(' +text_analog+ ')\n';
    return code;
  };
  
  Python['writedigital'] = function(block) {
    var dropdown_name = block.getFieldValue('NAME');
    var text_digital = block.getFieldValue('digital');
    // TODO: Assemble Python into code variable.
    var code = 'pin' +dropdown_name+ '.write_digital(' +text_digital+ ')\n';
    return code;
  };
}

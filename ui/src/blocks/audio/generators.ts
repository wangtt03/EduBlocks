export default function define(Python: Blockly.BlockGenerators) {


  Python['import_audio'] = function (block) {
    const code = 'import audioio\n';
    return code;
  };

  Python['audio_conf'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = audioio.AudioOut(' +text_pinno+ ')\n';
    return code;
  };

  Python['audio_raw'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ ' = audioio.RawSample(' +text_pinno+ ')\n';
    return code;
  };

  Python['audio_play'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    var text_pinno = block.getFieldValue('pinno');
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.play(' +text_pinno+ ')\n';
    return code;
  };

  Python['audio_stop'] = function(block) {
    var variable_pin = Blockly.Python.variableDB_.getName(block.getFieldValue('pin'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble Python into code variable.
    var code = variable_pin+ '.stop()\n';
    return code;
  };

}

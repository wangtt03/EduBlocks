export default function define(Python: Blockly.BlockGenerators) {


  Python['import_dotstar'] = function (block) {
    let code = 'import adafruit_dotstar\n';
    return code;
  };

  Python['vardotstar'] = function(block) {
    var variable_led = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
    var text_input = block.getFieldValue('input');
    // TODO: Assemble Python into code variable.
    var code = variable_led+ ' = adafruit_dotstar.DotStar(' +text_input+ ')\n';
    return code;
  };

  Python['ledfill'] = function(block) {
    var variable_led = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
    var text_input = block.getFieldValue('input');
    // TODO: Assemble Python into code variable.
    var code = variable_led+ '.fill(' +text_input+ ')\n';
    return code;
  };

  Python['dsbrightness'] = function(block) {
    var variable_led = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
    var text_brightness = block.getFieldValue('brightness');
    // TODO: Assemble Python into code variable.
    var code = variable_led+ '.brightness = ' +text_brightness+ '\n';
    return code;
  };

  Python['dsvar'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('led'), Blockly.Variables.NAME_TYPE);
    var text_neonum = block.getFieldValue('neonum');
    var text_colour = block.getFieldValue('colour');
    // TODO: Assemble Python into code variable.
    var code = variable_name+ '[' +text_neonum+ '] = (' +text_colour+ ')\n';
    return code;
  };
  
}

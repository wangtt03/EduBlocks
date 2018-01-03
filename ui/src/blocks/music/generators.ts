export default function define(Python: Blockly.BlockGenerators) {

  Python['musicplay'] = function (block) {
    let text_musicplay = block.getFieldValue('musicplay');
    let code = 'music.play(' + text_musicplay + ') \n';
    return code;
  };

  Python['musicimport'] = function (block) {
    let code = 'import music\n';
    return code;
  };

  Python['musicpitch'] = function (block) {
    let text_musicpitch  = block.getFieldValue('musicpitch');
    let code = 'music.pitch(' + text_musicpitch + ') \n';
    return code;
  };

  Python['musicreset'] = function(block) {
    // TODO: Assemble Python into code variable.
    const code = 'music.reset()\n';
    return code;
  };

  Python['musicstop'] = function(block) {
    // TODO: Assemble Python into code variable.
    const code = 'music.stop()\n';
    return code;
  };

  Python['musictempo'] = function (block) {
    let text_musictempo  = block.getFieldValue('musictempo');
    let code = 'music.set_tempo(' + text_musictempo + ') \n';
    return code;
  };

  Python['musicgettempo'] = function (block) {
    const code = 'music.get_tempo()';
    return [code, Blockly.Python.ORDER_ATOMIC];
  };
}

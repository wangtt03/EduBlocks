export default function define(Python: Blockly.BlockGenerators) {

  Python['radiosend'] = function (block) {
    let text_send = block.getFieldValue('send');
    let code = 'radio.send("' + text_send + '") \n';
    return code;
  };

  Python['radioconf'] = function (block) {
    let text_conf = block.getFieldValue('conf');
    let code = 'radio.config(' + text_conf + ') \n';
    return code;
  };
  
  Python['imradio'] = function (block) {
    let code = 'import radio \n';
    return code;
  };

  Python['radioon'] = function (block) {
    let code = 'radio.on()\n';
    return code;
  };
  
}

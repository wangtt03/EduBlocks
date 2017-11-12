export default function define(Python: Blockly.BlockGenerators) {


  Python['scroll'] = function (block) {
    let text_message = block.getFieldValue('message');
    let code = 'display.scroll("' + text_message + '") \n';
    return code;
  };

  Python['image'] = function (block) {
    let text_image = block.getFieldValue('image');
    let code = 'display.show(' + text_image + ') \n';
    return code;
  };

  Python['getpixel'] = function (block) {
    let text_xy = block.getFieldValue('xy');
    let code = 'display.get_pixel(' + text_xy + ') \n';
    return code;
  };

  Python['setpixel'] = function (block) {
    let text_setpix = block.getFieldValue('setpix');
    let code = 'display.set_pixel(' + text_setpix + ') \n';
    return code;
  };

  Python['radiosend'] = function (block) {
    let text_send = block.getFieldValue('send');
    let code = 'radio.send("' + text_send + '") \n';
    return code;
  };
  
  Python['disclear'] = function (block) {
    let code = 'display.clear() \n';
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
  

  Python['disonoff'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'display.' +dropdown_name+ '()\n';
  return code;
};


  

}

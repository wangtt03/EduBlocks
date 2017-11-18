export default function define(Python: Blockly.BlockGenerators) {


  Python['scroll'] = function (block) {
    let text_message = block.getFieldValue('message');
    let code = 'display.scroll("' + text_message + '") \n';
    return code;
  };

  Python['scrollvar'] = function (block) {
    let text_message = block.getFieldValue('message');
    let code = 'display.scroll(' + text_message + ') \n';
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

Python['imagecreate'] = function(block) {
  var text_var = block.getFieldValue('var');
  var text_11 = block.getFieldValue('11');
  var text_12 = block.getFieldValue('12');
  var text_13 = block.getFieldValue('13');
  var text_14 = block.getFieldValue('14');
  var text_15 = block.getFieldValue('15');
  var text_21 = block.getFieldValue('21');
  var text_22 = block.getFieldValue('22');
  var text_23 = block.getFieldValue('23');
  var text_24 = block.getFieldValue('24');
  var text_25 = block.getFieldValue('25');
  var text_31 = block.getFieldValue('31');
  var text_32 = block.getFieldValue('32');
  var text_33 = block.getFieldValue('33');
  var text_34 = block.getFieldValue('34');
  var text_35 = block.getFieldValue('35');
  var text_41 = block.getFieldValue('41');
  var text_42 = block.getFieldValue('42');
  var text_43 = block.getFieldValue('43');
  var text_44 = block.getFieldValue('44');
  var text_45 = block.getFieldValue('45');
  var text_51 = block.getFieldValue('51');
  var text_52 = block.getFieldValue('52');
  var text_53 = block.getFieldValue('53');
  var text_54 = block.getFieldValue('54');
  var text_55 = block.getFieldValue('55');
  // TODO: Assemble Python into code variable.
  var code = text_var +' = Image("'+text_11+text_12+text_13+text_14+text_15+ ':' + +text_21+text_22+text_23+text_24+text_25+ ':'+ +text_31+text_32+text_33+text_34+text_35+ ':' +text_41+text_42+text_43+text_44+text_45+ ':'+text_51+text_52+text_53+text_54+text_55+ '")\n';
  return code;
};
  

}

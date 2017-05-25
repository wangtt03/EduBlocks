export default function define(Python: Blockly.BlockGenerators) {
  Python['mcimport'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'from mcpi.minecraft import Minecraft \n';
    return code;
  };

  Python['mccreate'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'global mc; mc = Minecraft.create() \n';
    return code;
  };

  Python['import_block'] = function (block) {
    var code = 'from mcpi import block\n';
    return code;
  };

  Python['mcpost'] = function (block) {
    var text_chat = block.getFieldValue('chat');
    // TODO: Assemble Python into code variable.
    var code = 'mc.postToChat("' + text_chat + '")\n';
    return code;
  };

  Python['mcpos'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'playerPos = mc.player.getPos() \n';
    return code;
  };

  Python['varprint'] = function (block) {
    var text_var = block.getFieldValue('var');
    // TODO: Assemble Python into code variable.
    var code = 'print(' + text_var + ')\n';
    return code;
  };

  Python['setpos'] = function (block) {
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var number_z = block.getFieldValue('z');
    // TODO: Assemble Python into code variable.
    var code = 'mc.player.setPos(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
    return code;
  };

  Python['campos'] = function (block) {
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var number_z = block.getFieldValue('z');
    // TODO: Assemble Python into code variable.
    var code = 'mc.camera.setPos(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
    return code;
  };

  Python['getblock'] = function (block) {
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var number_z = block.getFieldValue('z');
    // TODO: Assemble Python into code variable.
    var code = 'blockType = mc.getBlock(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
    return code;
  };

  Python['cameraset'] = function (block) {
    var dropdown_drop = block.getFieldValue('drop');
    // TODO: Assemble Python into code variable.
    var code = 'mc.camera.set' + dropdown_drop + '()\n';
    return code;
  };

  Python['setblock'] = function (block) {
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var number_z = block.getFieldValue('z');
    var number_id = block.getFieldValue('id');
    // TODO: Assemble Python into code variable.
    var code = 'blockType = mc.setBlock(' + number_x + ', ' + number_y + ', ' + number_z + ', ' + number_id + ')\n';
    return code;
  };

  Python['mcvar'] = function (block) {
    // TODO: Assemble Python into code variable.
    var code = 'x, y, z = mc.player.getPos() \n';
    return code;
  };

  Python['mctext'] = function (block) {
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    var text_z = block.getFieldValue('z');
    var number_id = block.getFieldValue('id');
    // TODO: Assemble Python into code variable.
    var code = 'blockType = mc.setBlock(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + number_id + ')\n';
    return code;
  };

  Python['mcblocks'] = function (block) {
    var text_x = block.getFieldValue('x');
    var text_y = block.getFieldValue('y');
    var text_z = block.getFieldValue('z');
    var text_q = block.getFieldValue('q');
    var text_w = block.getFieldValue('w');
    var text_e = block.getFieldValue('e');
    var text_r = block.getFieldValue('r');
    var text_t = block.getFieldValue('t');
    var text_y = block.getFieldValue('y');
    // TODO: Assemble Python into code variable.
    var code = 'mc.setBlocks(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_q + ', ' + text_w + ', ' + text_e + ', ' + text_r + ', ' + text_t + ', ' + text_y + ')\n';
    return code;
  };

  Python['build'] = function (block) {
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var number_z = block.getFieldValue('z');
    // TODO: Assemble Python into code variable.
    var code = 'buildPumpkin(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
    return code;
  };

  Python['printwall'] = function (block) {
    var text_11 = block.getFieldValue('11');
    var text_12 = block.getFieldValue('12');
    var text_13 = block.getFieldValue('13');
    var text_14 = block.getFieldValue('14');
    var text_15 = block.getFieldValue('15');
    var text_16 = block.getFieldValue('16');
    var text_17 = block.getFieldValue('17');
    var text_18 = block.getFieldValue('18');
    var text_21 = block.getFieldValue('21');
    var text_22 = block.getFieldValue('22');
    var text_23 = block.getFieldValue('23');
    var text_24 = block.getFieldValue('24');
    var text_25 = block.getFieldValue('25');
    var text_26 = block.getFieldValue('26');
    var text_27 = block.getFieldValue('27');
    var text_28 = block.getFieldValue('28');
    var text_31 = block.getFieldValue('31');
    var text_32 = block.getFieldValue('32');
    var text_33 = block.getFieldValue('33');
    var text_34 = block.getFieldValue('34');
    var text_35 = block.getFieldValue('35');
    var text_36 = block.getFieldValue('36');
    var text_37 = block.getFieldValue('37');
    var text_38 = block.getFieldValue('38');
    var text_41 = block.getFieldValue('41');
    var text_42 = block.getFieldValue('42');
    var text_43 = block.getFieldValue('43');
    var text_44 = block.getFieldValue('44');
    var text_45 = block.getFieldValue('45');
    var text_46 = block.getFieldValue('46');
    var text_47 = block.getFieldValue('47');
    let text_48 = block.getFieldValue('48');
    let text_51 = block.getFieldValue('51');
    let text_52 = block.getFieldValue('52');
    let text_53 = block.getFieldValue('53');
    let text_54 = block.getFieldValue('54');
    let text_55 = block.getFieldValue('55');
    let text_56 = block.getFieldValue('56');
    let text_57 = block.getFieldValue('57');
    let text_58 = block.getFieldValue('58');
    let text_61 = block.getFieldValue('61');
    let text_62 = block.getFieldValue('62');
    let text_63 = block.getFieldValue('63');
    let text_64 = block.getFieldValue('64');
    let text_65 = block.getFieldValue('65');
    let text_66 = block.getFieldValue('66');
    let text_67 = block.getFieldValue('67');
    let text_68 = block.getFieldValue('68');
    let text_71 = block.getFieldValue('71');
    let text_72 = block.getFieldValue('72');
    let text_73 = block.getFieldValue('73');
    let text_74 = block.getFieldValue('74');
    let text_75 = block.getFieldValue('75');
    let text_76 = block.getFieldValue('76');
    let text_77 = block.getFieldValue('77');
    let text_78 = block.getFieldValue('78');
    let text_81 = block.getFieldValue('81');
    let text_82 = block.getFieldValue('82');
    let text_83 = block.getFieldValue('83');
    let text_84 = block.getFieldValue('84');
    let text_85 = block.getFieldValue('85');
    let text_86 = block.getFieldValue('86');
    let text_87 = block.getFieldValue('87');
    let text_88 = block.getFieldValue('88');
    // TODO: Assemble Python into code variable.
    let start = 'PrintWall(PixelArt(\n';
    let line1 = ' ' + text_11 + ', ' + text_12 + ', ' + text_13 + ', ' + text_14 + ', ' + text_15 + ', ' + text_16 + ', ' + text_17 + ', ' + text_18 + ', \n'
    let line2 = ' ' + text_21 + ', ' + text_22 + ', ' + text_23 + ', ' + text_24 + ', ' + text_25 + ', ' + text_26 + ', ' + text_27 + ', ' + text_28 + ', \n'
    let line3 = ' ' + text_31 + ', ' + text_32 + ', ' + text_33 + ', ' + text_34 + ', ' + text_35 + ', ' + text_36 + ', ' + text_37 + ', ' + text_38 + ', \n'
    let line4 = ' ' + text_41 + ', ' + text_42 + ', ' + text_43 + ', ' + text_44 + ', ' + text_45 + ', ' + text_46 + ', ' + text_47 + ', ' + text_48 + ', \n'
    let line5 = ' ' + text_51 + ', ' + text_52 + ', ' + text_53 + ', ' + text_54 + ', ' + text_55 + ', ' + text_56 + ', ' + text_57 + ', ' + text_58 + ', \n'
    let line6 = ' ' + text_61 + ', ' + text_62 + ', ' + text_63 + ', ' + text_64 + ', ' + text_65 + ', ' + text_66 + ', ' + text_67 + ', ' + text_68 + ', \n'
    let line7 = ' ' + text_71 + ', ' + text_72 + ', ' + text_73 + ', ' + text_74 + ', ' + text_75 + ', ' + text_76 + ', ' + text_77 + ', ' + text_78 + ', \n'
    let line8 = ' ' + text_81 + ', ' + text_82 + ', ' + text_83 + ', ' + text_84 + ', ' + text_85 + ', ' + text_86 + ', ' + text_87 + ', ' + text_88 + ', \n'
    let end = '))\n'
    let code = start + line1 + line2 + line3 + line4 + line5 + line6 + line7 + line8 + end + '\n'
    return code;
  };

  Python['mctext2'] = function (block) {
    let text_x = block.getFieldValue('x');
    let text_y = block.getFieldValue('y');
    let text_z = block.getFieldValue('z');
    let text_i = block.getFieldValue('i');
    // TODO: Assemble Python into code variable.
    let code = 'mc.setBlock(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_i + ')\n';
    return code;
  };

  Python['mctext5'] = function (block) {
    let text_x = block.getFieldValue('x');
    let text_y = block.getFieldValue('y');
    let text_z = block.getFieldValue('z');
    let text_p = block.getFieldValue('p');
    let text_i = block.getFieldValue('i');
    // TODO: Assemble Python into code variable.
    let code = 'mc.setBlock(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_i + ', ' + text_p + ')\n';
    return code;
  };

  Python['mcblocks8'] = function (block) {
    let text_x = block.getFieldValue('x');
    let text_y = block.getFieldValue('y');
    let text_z = block.getFieldValue('z');
    let text_q = block.getFieldValue('q');
    let text_w = block.getFieldValue('w');
    let text_e = block.getFieldValue('e');
    let text_r = block.getFieldValue('r');
    let text_t = block.getFieldValue('t');
    // TODO: Assemble Python into code variable.
    let code = 'mc.setBlocks(' + text_x + ', ' + text_y + ', ' + text_z + ', ' + text_q + ', ' + text_w + ', ' + text_e + ', ' + text_r + ', ' + text_t + ')\n';
    return code;
  };

  Python['return'] = function (block) {
    // TODO: Assemble Python into code variable.
    let code = 'return math.sqrt((xd*xd) + (yd*yd) + (zd*zd))\n';
    return code;
  };

  Python['getdist'] = function (block) {
    let number_x = block.getFieldValue('x');
    let number_y = block.getFieldValue('y');
    let number_z = block.getFieldValue('z');
    // TODO: Assemble Python into code variable.
    let code = 'distance_to_player(' + number_x + ', ' + number_y + ', ' + number_z + ')\n';
    return code;
  };
}

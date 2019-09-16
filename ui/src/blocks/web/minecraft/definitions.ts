export default function define(Blocks: Blockly.BlockDefinitions) {
  Blocks['mcimport'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from mcpi.minecraft import Minecraft');
      this.setPreviousStatement(true, null);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#7D21E1");
      this.setTooltip('Use this to import minecraft.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mccreate'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc = Minecraft.create()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#7D21E1");
      this.setTooltip('Use this to connect to minecraft. ALWAYS REQUIRED.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['import_block'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('from mcpi import block');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#7D21E1");
      this.setTooltip('Imports the mcpi block library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mcpost'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.postToChat(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to send a message to the Minecraft chat.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mcpos'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('playerPos = mc.player.getPos()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this set a variable of the players position.');
      this.setHelpUrl('http://www.example.com/');
    },
  };


  Blockly.Blocks['setpos'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.player.setPos(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Set players position');
      this.setHelpUrl('');
    },
  };

  Blocks['campos'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.camera.setPos(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set the cameras position');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['getblock'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('blockType = mc.getBlock(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to get a block type.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['cameraset'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.camera.set')
        .appendField(new Blockly.FieldDropdown([['Fixed', 'Fixed'], ['Normal', 'Normal']]), 'drop')
        .appendField('()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Set camera mode.');
      this.setHelpUrl('');
    },
  };

  Blocks['setblock'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('blockType = mc.setBlock(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set a block type.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mcvar'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('x, y, z = mc.player.getPos()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this set a variable of the players position.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mctext'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('blockType = mc.setBlock(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set a block type with text');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mcblocks'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.setBlocks(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text4")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text5")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text6")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text7")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text8")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set numerous blocks');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['build'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('buildPumpkin(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['printwall'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('PrintWall(PixelArt(');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '11')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '12')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '13')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '14')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '15')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '16')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '17')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '18')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '21')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '22')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '23')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '24')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '25')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '26')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '27')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '28')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '31')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '32')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '33')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '34')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '35')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '36')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '37')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '38')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '41')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '42')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '43')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '44')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '45')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '46')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '47')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '48')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '51')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '52')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '53')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '54')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '55')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '56')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '57')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '58')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '61')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '62')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '63')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '64')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '65')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '66')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '67')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '68')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '71')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '72')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '73')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '74')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '75')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '76')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '77')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '78')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput(''), '81')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '82')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '83')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '84')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '85')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '86')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '87')
        .appendField(', ')
        .appendField(new Blockly.FieldTextInput(''), '88')
        .appendField(', ');
      this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('))');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setInputsInline(false);
      this.setColour("#19E32E");
      this.setTooltip('');
      this.setHelpUrl('');
    },
  };

  Blocks['mctext2'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.setBlock(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set a block type with text');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mctext5'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.setBlock(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text4")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Use this to set a block type with text');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mcblocks8'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('mc.setBlocks(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text3")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text4")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text5")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text6")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(',')
      this.appendValueInput("text7")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['return'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('return math.sqrt((xd*xd) + (yd*yd) + (zd*zd))');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Imports the edupy library.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['getdist'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('distance_to_player(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blockly.Blocks['mcpiblockas'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import mcpi.block as block');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#7D21E1");
      this.setTooltip('Imports the Minecraft Block Library');
      this.setHelpUrl('');
    },
  };

  Blockly.Blocks['defcall'] = {
    init: function () {
      this.appendDummyInput()
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField('(')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#19E32E");
      this.setTooltip('Call a function');
      this.setHelpUrl('');
    },
  };

  Blocks['mc_t_new_turtle'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(' = mcturtle.Turtle()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
      this.setTooltip('创建一个海龟画笔.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blockly.Blocks['mcimportturtle'] = {
    init: function () {
      this.appendDummyInput()
        .appendField('import mcpi.utils.mineturtle as mcturtle');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#7D21E1");
      this.setTooltip('导入我的世界海龟画笔工具包.');
      this.setHelpUrl('');
    },
  };

  Blocks['mc_t_pendelay'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField('.pendelay(')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
      this.setTooltip('Use this to send a message to the Minecraft chat.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mc_t_penblock'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField('.penblock(')
        .appendField(new Blockly.FieldDropdown(blocks_options), "options")
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
      this.setTooltip('Use this to send a message to the Minecraft chat.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mc_t_turtletype'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField('.turtle(')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
      this.setTooltip('Use this to send a message to the Minecraft chat.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mc_t_penwidth'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField('.penwidth(')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
      this.setTooltip('Use this to send a message to the Minecraft chat.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blockly.Blocks['mc_t_goto'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField('.goto(')
      this.appendValueInput("text")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(', ')
      this.appendValueInput("text2")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
      this.setTooltip('Set players position');
      this.setHelpUrl('');
    },
  };

  Blocks['mc_t_penupdown'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["penup", "penup"], ["pendown", "pendown"]]), "options")
        .appendField("()");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
      this.setTooltip('创建一个海龟画笔.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mc_t_pendirection'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["left", "left"], ["right", "right"], ["up", "up"], ["down", "down"]]), "options")
        .appendField("(")
      this.appendValueInput('text1')
        .setCheck(null);
      this.appendDummyInput()
        .appendField(")");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
      this.setTooltip('Use this to send a message to the Minecraft chat.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mc_t_pengo'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".")
        .appendField(new Blockly.FieldDropdown([["go", "go"], ["back", "back"]]), "options")
        .appendField("(")
      this.appendValueInput("text1")
        .setCheck(null);
      this.appendDummyInput()
        .appendField(')');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
      this.setTooltip('Use this to send a message to the Minecraft chat.');
      this.setHelpUrl('http://www.example.com/');
    },
  };

  Blocks['mc_t_gridalign'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("turtle"), "turtle")
        .appendField(".")
        .appendField('gridalign()');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour("#0000CD");
      this.setTooltip('创建一个海龟画笔.');
      this.setHelpUrl('http://www.example.com/');
    },
  };
}

var blocks_options = [
  ["block.AIR", "block.AIR"],
  ["block.STONE", "block.STONE"],
  ["block.GRASS", "block.GRASS"],
  ["block.DIRT", "block.DIRT"],
  ["block.COBBLESTONE", "block.COBBLESTONE"],
  ["block.WOOD_PLANKS", "block.WOOD_PLANKS"],
  ["block.SAPLING", "block.SAPLING"],
  ["block.BEDROCK", "block.BEDROCK"],
  ["block.WATER_FLOWING", "block.WATER_FLOWING"],
  ["block.WATER", "block.WATER"],
  ["block.WATER_STATIONARY", "block.WATER_STATIONARY"],
  ["block.LAVA_FLOWING", "block.LAVA_FLOWING"],
  ["block.LAVA", "block.LAVA"],
  ["block.LAVA_STATIONARY", "block.LAVA_STATIONARY"],
  ["block.SAND", "block.SAND"],
  ["block.GRAVEL", "block.GRAVEL"],
  ["block.GOLD_ORE", "block.GOLD_ORE"],
  ["block.IRON_ORE", "block.IRON_ORE"],
  ["block.COAL_ORE", "block.COAL_ORE"],
  ["block.WOOD", "block.WOOD"],
  ["block.LEAVES", "block.LEAVES"],
  ["block.GLASS", "block.GLASS"],
  ["block.LAPIS_LAZULI_ORE", "block.LAPIS_LAZULI_ORE"],
  ["block.LAPIS_LAZULI_BLOCK", "block.LAPIS_LAZULI_BLOCK"],
  ["block.SANDSTONE", "block.SANDSTONE"],
  ["block.SANDSTONE_SMOOTH", "block.SANDSTONE_SMOOTH"],
  ["block.SANDSTONE_CHISELED", "block.SANDSTONE_CHISELED"],
  ["block.BED", "block.BED"],
  ["block.BED_BLOCK", "block.BED_BLOCK"],
  ["block.COBWEB", "block.COBWEB"],
  ["block.GRASS_TALL", "block.GRASS_TALL"],
  ["block.WOOL", "block.WOOL"],
  ["block.FLOWER_YELLOW", "block.FLOWER_YELLOW"],
  ["block.FLOWER_CYAN", "block.FLOWER_CYAN"],
  ["block.MUSHROOM_BROWN", "block.MUSHROOM_BROWN"],
  ["block.MUSHROOM_RED", "block.MUSHROOM_RED"],
  ["block.GOLD_BLOCK", "block.GOLD_BLOCK"],
  ["block.IRON_BLOCK", "block.IRON_BLOCK"],
  ["block.STONE_SLAB_DOUBLE", "block.STONE_SLAB_DOUBLE"],
  ["block.STONE_SLAB", "block.STONE_SLAB"],
  ["block.BRICK_BLOCK", "block.BRICK_BLOCK"],
  ["block.TNT", "block.TNT"],
  ["block.BOOKSHELF", "block.BOOKSHELF"],
  ["block.MOSS_STONE", "block.MOSS_STONE"],
  ["block.OBSIDIAN", "block.OBSIDIAN"],
  ["block.TORCH", "block.TORCH"],
  ["block.FIRE", "block.FIRE"],
  ["block.STAIRS_WOOD", "block.STAIRS_WOOD"],
  ["block.CHEST", "block.CHEST"],
  ["block.DIAMOND_ORE", "block.DIAMOND_ORE"],
  ["block.DIAMOND_BLOCK", "block.DIAMOND_BLOCK"],
  ["block.CRAFTING_TABLE", "block.CRAFTING_TABLE"],
  ["block.FARMLAND", "block.FARMLAND"],
  ["block.FURNACE_INACTIVE", "block.FURNACE_INACTIVE"],
  ["block.FURNACE_ACTIVE", "block.FURNACE_ACTIVE"],
  ["block.DOOR_WOOD", "block.DOOR_WOOD"],
  ["block.LADDER", "block.LADDER"],
  ["block.STAIRS_COBBLESTONE", "block.STAIRS_COBBLESTONE"],
  ["block.DOOR_IRON", "block.DOOR_IRON"],
  ["block.REDSTONE_ORE", "block.REDSTONE_ORE"],
  ["block.STONE_BUTTON", "block.STONE_BUTTON"],
  ["block.SNOW", "block.SNOW"],
  ["block.ICE", "block.ICE"],
  ["block.SNOW_BLOCK", "block.SNOW_BLOCK"],
  ["block.CACTUS", "block.CACTUS"],
  ["block.CLAY", "block.CLAY"],
  ["block.SUGAR_CANE", "block.SUGAR_CANE"],
  ["block.FENCE", "block.FENCE"],
  ["block.GLOWSTONE_BLOCK", "block.GLOWSTONE_BLOCK"],
  ["block.BEDROCK_INVISIBLE", "block.BEDROCK_INVISIBLE"],
  ["block.STAINED_GLASS", "block.STAINED_GLASS"],
  ["block.STONE_BRICK", "block.STONE_BRICK"],
  ["block.GLASS_PANE", "block.GLASS_PANE"],
  ["block.MELON", "block.MELON"],
  ["block.FENCE_GATE", "block.FENCE_GATE"],
  ["block.WOOD_BUTTON", "block.WOOD_BUTTON"],
  ["block.REDSTONE_BLOCK", "block.REDSTONE_BLOCK"],
  ["block.QUARTZ_BLOCK", "block.QUARTZ_BLOCK"],
  ["block.HARDENED_CLAY_STAINED", "block.HARDENED_CLAY_STAINED"],
  ["block.SEA_LANTERN", "block.SEA_LANTERN"],
  ["block.CARPET", "block.CARPET"],
  ["block.COAL_BLOCK", "block.COAL_BLOCK"],
  ["block.GLOWING_OBSIDIAN", "block.GLOWING_OBSIDIAN"],
  ["block.NETHER_REACTOR_CORE", "block.NETHER_REACTOR_CORE"],
  ["block.REDSTONE_LAMP_INACTIVE", "block.REDSTONE_LAMP_INACTIVE"],
  ["block.REDSTONE_LAMP_ACTIVE", "block.REDSTONE_LAMP_ACTIVE"],
  ["block.SUNFLOWER", "block.SUNFLOWER"],
  ["block.LILAC", "block.LILAC"],
  ["block.DOUBLE_TALLGRASS", "block.DOUBLE_TALLGRASS"],
  ["block.LARGE_FERN", "block.LARGE_FERN"],
  ["block.ROSE_BUSH", "block.ROSE_BUSH"],
  ["block.PEONY", "block.PEONY"],
  ["block.WOOL_WHITE", "block.WOOL_WHITE"],
  ["block.WOOL_ORANGE", "block.WOOL_ORANGE"],
  ["block.WOOL_MAGENTA", "block.WOOL_MAGENTA"],
  ["block.WOOL_LIGHT_BLUE", "block.WOOL_LIGHT_BLUE"],
  ["block.WOOL_YELLOW", "block.WOOL_YELLOW"],
  ["block.WOOL_LIME", "block.WOOL_LIME"],
  ["block.WOOL_PINK", "block.WOOL_PINK"],
  ["block.WOOL_GRAY", "block.WOOL_GRAY"],
  ["block.WOOL_LIGHT_GRAY", "block.WOOL_LIGHT_GRAY"],
  ["block.WOOL_CYAN", "block.WOOL_CYAN"],
  ["block.WOOL_PURPLE", "block.WOOL_PURPLE"],
  ["block.WOOL_BLUE", "block.WOOL_BLUE"],
  ["block.WOOL_BROWN", "block.WOOL_BROWN"],
  ["block.WOOL_GREEN", "block.WOOL_GREEN"],
  ["block.WOOL_RED", "block.WOOL_RED"],
  ["block.WOOL_BLACK", "block.WOOL_BLACK"],
  ["block.CARPET_WHITE", "block.CARPET_WHITE"],
  ["block.CARPET_ORANGE", "block.CARPET_ORANGE"],
  ["block.CARPET_MAGENTA", "block.CARPET_MAGENTA"],
  ["block.CARPET_LIGHT_BLUE", "block.CARPET_LIGHT_BLUE"],
  ["block.CARPET_YELLOW", "block.CARPET_YELLOW"],
  ["block.CARPET_LIME", "block.CARPET_LIME"],
  ["block.CARPET_PINK", "block.CARPET_PINK"],
  ["block.CARPET_GRAY", "block.CARPET_GRAY"],
  ["block.CARPET_LIGHT_GRAY", "block.CARPET_LIGHT_GRAY"],
  ["block.CARPET_CYAN", "block.CARPET_CYAN"],
  ["block.CARPET_PURPLE", "block.CARPET_PURPLE"],
  ["block.CARPET_BLUE", "block.CARPET_BLUE"],
  ["block.CARPET_BROWN", "block.CARPET_BROWN"],
  ["block.CARPET_GREEN", "block.CARPET_GREEN"],
  ["block.CARPET_RED", "block.CARPET_RED"],
  ["block.CARPET_BLACK", "block.CARPET_BLACK"],
  ["block.STAINED_GLASS_WHITE", "block.STAINED_GLASS_WHITE"],
  ["block.STAINED_GLASS_ORANGE", "block.STAINED_GLASS_ORANGE"],
  ["block.STAINED_GLASS_MAGENTA", "block.STAINED_GLASS_MAGENTA"],
  ["block.STAINED_GLASS_LIGHT_BLUE", "block.STAINED_GLASS_LIGHT_BLUE"],
  ["block.STAINED_GLASS_YELLOW", "block.STAINED_GLASS_YELLOW"],
  ["block.STAINED_GLASS_LIME", "block.STAINED_GLASS_LIME"],
  ["block.STAINED_GLASS_PINK", "block.STAINED_GLASS_PINK"],
  ["block.STAINED_GLASS_GRAY", "block.STAINED_GLASS_GRAY"],
  ["block.STAINED_GLASS_LIGHT_GRAY", "block.STAINED_GLASS_LIGHT_GRAY"],
  ["block.STAINED_GLASS_CYAN", "block.STAINED_GLASS_CYAN"],
  ["block.STAINED_GLASS_PURPLE", "block.STAINED_GLASS_PURPLE"],
  ["block.STAINED_GLASS_BLUE", "block.STAINED_GLASS_BLUE"],
  ["block.STAINED_GLASS_BROWN", "block.STAINED_GLASS_BROWN"],
  ["block.STAINED_GLASS_GREEN", "block.STAINED_GLASS_GREEN"],
  ["block.STAINED_GLASS_RED", "block.STAINED_GLASS_RED"],
  ["block.STAINED_GLASS_BLACK", "block.STAINED_GLASS_BLACK"],
  ["block.HARDENED_CLAY_STAINED_WHITE", "block.HARDENED_CLAY_STAINED_WHITE"],
  ["block.HARDENED_CLAY_STAINED_ORANGE", "block.HARDENED_CLAY_STAINED_ORANGE"],
  ["block.HARDENED_CLAY_STAINED_MAGENTA", "block.HARDENED_CLAY_STAINED_MAGENTA"],
  ["block.HARDENED_CLAY_STAINED_LIGHT_BLUE", "block.HARDENED_CLAY_STAINED_LIGHT_BLUE"],
  ["block.HARDENED_CLAY_STAINED_YELLOW", "block.HARDENED_CLAY_STAINED_YELLOW"],
  ["block.HARDENED_CLAY_STAINED_LIME", "block.HARDENED_CLAY_STAINED_LIME"],
  ["block.HARDENED_CLAY_STAINED_PINK", "block.HARDENED_CLAY_STAINED_PINK"],
  ["block.HARDENED_CLAY_STAINED_GRAY", "block.HARDENED_CLAY_STAINED_GRAY"],
  ["block.HARDENED_CLAY_STAINED_LIGHT_GRAY", "block.HARDENED_CLAY_STAINED_LIGHT_GRAY"],
  ["block.HARDENED_CLAY_STAINED_CYAN", "block.HARDENED_CLAY_STAINED_CYAN"],
  ["block.HARDENED_CLAY_STAINED_PURPLE", "block.HARDENED_CLAY_STAINED_PURPLE"],
  ["block.HARDENED_CLAY_STAINED_BLUE", "block.HARDENED_CLAY_STAINED_BLUE"],
  ["block.HARDENED_CLAY_STAINED_BROWN", "block.HARDENED_CLAY_STAINED_BROWN"],
  ["block.HARDENED_CLAY_STAINED_GREEN", "block.HARDENED_CLAY_STAINED_GREEN"],
  ["block.HARDENED_CLAY_STAINED_RED", "block.HARDENED_CLAY_STAINED_RED"],
  ["block.HARDENED_CLAY_STAINED_BLACK", "block.HARDENED_CLAY_STAINED_BLACK"],
  ["block.LEAVES_OAK_DECAYABLE", "block.LEAVES_OAK_DECAYABLE"],
  ["block.LEAVES_SPRUCE_DECAYABLE", "block.LEAVES_SPRUCE_DECAYABLE"],
  ["block.LEAVES_BIRCH_DECAYABLE", "block.LEAVES_BIRCH_DECAYABLE"],
  ["block.LEAVES_JUNGLE_DECAYABLE", "block.LEAVES_JUNGLE_DECAYABLE"],
  ["block.LEAVES_OAK_PERMANENT", "block.LEAVES_OAK_PERMANENT"],
  ["block.LEAVES_SPRUCE_PERMANENT", "block.LEAVES_SPRUCE_PERMANENT"],
  ["block.LEAVES_BIRCH_PERMANENT", "block.LEAVES_BIRCH_PERMANENT"],
  ["block.LEAVES_JUNGLE_PERMANENT", "block.LEAVES_JUNGLE_PERMANENT"],
  ["block.LEAVES_ACACIA_DECAYABLE", "block.LEAVES_ACACIA_DECAYABLE"],
  ["block.LEAVES_DARK_OAK_DECAYABLE", "block.LEAVES_DARK_OAK_DECAYABLE"],
  ["block.LEAVES_ACACIA_PERMANENT", "block.LEAVES_ACACIA_PERMANENT"],
  ["block.LEAVES_DARK_OAK_PERMANENT", "block.LEAVES_DARK_OAK_PERMANENT"],
  ["block.BONE_BLOCK", "block.BONE_BLOCK"],
  ["block.DIRT_COARSE", "block.DIRT_COARSE"],
  ["block.DIRT_PODZOL", "block.DIRT_PODZOL"],
  ["block.EMERALD_BLOCK", "block.EMERALD_BLOCK"],
  ["block.EMERALD_ORE", "block.EMERALD_ORE"],
  ["block.END_BRICKS", "block.END_BRICKS"],
  ["block.END_STONE", "block.END_STONE"],
  ["block.HARDENED_CLAY", "block.HARDENED_CLAY"],
  ["block.ICE_PACKED", "block.ICE_PACKED"],
  ["block.NETHERRACK", "block.NETHERRACK"],
  ["block.NETHER_WART_BLOCK", "block.NETHER_WART_BLOCK"],
  ["block.NOTEBLOCK", "block.NOTEBLOCK"],
  ["block.WOOD_PLANKS_OAK", "block.WOOD_PLANKS_OAK"],
  ["block.WOOD_PLANKS_SPRUCE", "block.WOOD_PLANKS_SPRUCE"],
  ["block.WOOD_PLANKS_BIRCH", "block.WOOD_PLANKS_BIRCH"],
  ["block.WOOD_PLANKS_JUNGLE", "block.WOOD_PLANKS_JUNGLE"],
  ["block.WOOD_PLANKS_ACACIA", "block.WOOD_PLANKS_ACACIA"],
  ["block.WOOD_PLANKS_DARK_OAK", "block.WOOD_PLANKS_DARK_OAK"],
  ["block.PRISMARINE", "block.PRISMARINE"],
  ["block.PRISMARINE_BRICKS", "block.PRISMARINE_BRICKS"],
  ["block.PRISMARINE_DARK", "block.PRISMARINE_DARK"],
  ["block.PURPUR_BLOCK", "block.PURPUR_BLOCK"],
  ["block.PURPUR_PILLAR", "block.PURPUR_PILLAR"],
  ["block.RED_NETHER_BRICK", "block.RED_NETHER_BRICK"],
  ["block.RED_SANDSTONE", "block.RED_SANDSTONE"],
  ["block.RED_SANDSTONE_CHISELED", "block.RED_SANDSTONE_CHISELED"],
  ["block.RED_SANDSTONE_SMOOTH", "block.RED_SANDSTONE_SMOOTH"],
  ["block.SLIME_BLOCK", "block.SLIME_BLOCK"],
  ["block.SOUL_SAND", "block.SOUL_SAND"],
  ["block.SPONGE", "block.SPONGE"],
  ["block.SPONGE_WET", "block.SPONGE_WET"],
  ["block.STONE_GRANITE", "block.STONE_GRANITE"],
  ["block.STONE_GRANITE_SMOOTH", "block.STONE_GRANITE_SMOOTH"],
  ["block.STONE_DIORITE", "block.STONE_DIORITE"],
  ["block.STONE_DIORITE_SMOOTH", "block.STONE_DIORITE_SMOOTH"],
  ["block.STONE_ANDESITE", "block.STONE_ANDESITE"],
  ["block.STONE_ANDESITE_SMOOTH", "block.STONE_ANDESITE_SMOOTH"],
  ["block.ANVIL", "block.ANVIL"],
  ["block.BEACON", "block.BEACON"],
  ["block.BED_OBJECT", "block.BED_OBJECT"],
  ["block.BEETROOT", "block.BEETROOT"],
  ["block.BREWING_STAND", "block.BREWING_STAND"],
  ["block.CAKE", "block.CAKE"],
  ["block.CARROTS", "block.CARROTS"],
  ["block.CAULDRON", "block.CAULDRON"],
  ["block.COMMAND_BLOCK", "block.COMMAND_BLOCK"],
  ["block.CHORUS_FLOWER", "block.CHORUS_FLOWER"],
  ["block.CHORUS_PLANT", "block.CHORUS_PLANT"],
  ["block.COCOA_PLANT", "block.COCOA_PLANT"],
  ["block.COMPARATOR_OFF", "block.COMPARATOR_OFF"],
  ["block.COMPARATOR_ON", "block.COMPARATOR_ON"],
  ["block.DAYLIGHT_SENSOR", "block.DAYLIGHT_SENSOR"],
  ["block.DEADBUSH", "block.DEADBUSH"],
  ["block.DISPENSER", "block.DISPENSER"],
  ["block.DOOR_ACACIA", "block.DOOR_ACACIA"],
  ["block.DOOR_BIRCH", "block.DOOR_BIRCH"],
  ["block.DOOR_DARK_OAK", "block.DOOR_DARK_OAK"],
  ["block.DOOR_JUNGLE", "block.DOOR_JUNGLE"],
  ["block.DOOR_SPRUCE", "block.DOOR_SPRUCE"],
  ["block.DRAGON_EGG", "block.DRAGON_EGG"],
  ["block.DROPPER", "block.DROPPER"],
  ["block.ENCHANTING_TABLE", "block.ENCHANTING_TABLE"],
  ["block.END_PORTAL_FRAME", "block.END_PORTAL_FRAME"],
  ["block.END_ROD", "block.END_ROD"],
  ["block.FERN", "block.FERN"],
  ["block.FLOWER_ALLIUM", "block.FLOWER_ALLIUM"],
  ["block.FLOWER_BLUE_ORCHID", "block.FLOWER_BLUE_ORCHID"],
  ["block.DANDELION", "block.DANDELION"],
  ["block.FLOWER_AZURE_BLUET", "block.FLOWER_AZURE_BLUET"],
  ["block.FLOWER_OXEYE_DAISY", "block.FLOWER_OXEYE_DAISY"],
  ["block.FLOWER_TULIP_RED", "block.FLOWER_TULIP_RED"],
  ["block.FLOWER_TULIP_ORANGE", "block.FLOWER_TULIP_ORANGE"],
  ["block.FLOWER_TULIP_WHITE", "block.FLOWER_TULIP_WHITE"],
  ["block.FLOWER_TULIP_PINK", "block.FLOWER_TULIP_PINK"],
  ["block.FROSTED_ICE", "block.FROSTED_ICE"],
  ["block.FLOWER_POT", "block.FLOWER_POT"],
  ["block.GRASS_PATH", "block.GRASS_PATH"],
  ["block.HAY_BLOCK", "block.HAY_BLOCK"],
  ["block.HOPPER", "block.HOPPER"],
  ["block.IRON_BARS", "block.IRON_BARS"],
  ["block.IRON_TRAPDOOR", "block.IRON_TRAPDOOR"],
  ["block.ITEM_FRAME", "block.ITEM_FRAME"],
  ["block.JUKEBOX", "block.JUKEBOX"],
  ["block.LEVER", "block.LEVER"],
  ["block.ACACIA_WOOD", "block.ACACIA_WOOD"],
  ["block.DARK_OAK_WOOD", "block.DARK_OAK_WOOD"],
  ["block.BIRCH_WOOD", "block.BIRCH_WOOD"],
  ["block.SPRUCE_WOOD", "block.SPRUCE_WOOD"],
  ["block.JUNGLE_WOOD", "block.JUNGLE_WOOD"],
  ["block.MAGMA", "block.MAGMA"],
  ["block.MELON_BLOCK", "block.MELON_BLOCK"],
  ["block.MOB_SPAWNER", "block.MOB_SPAWNER"],
  ["block.MUSHROOM_BLOCK_BROWN", "block.MUSHROOM_BLOCK_BROWN"],
  ["block.MUSHROOM_BLOCK_RED", "block.MUSHROOM_BLOCK_RED"],
  ["block.MYCELIUM", "block.MYCELIUM"],
  ["block.NETHER_BRICK", "block.NETHER_BRICK"],
  ["block.NETHER_WART", "block.NETHER_WART"],
  ["block.PISTON", "block.PISTON"],
  ["block.PISTON_HEAD", "block.PISTON_HEAD"],
  ["block.PORTAL", "block.PORTAL"],
  ["block.POTATOES", "block.POTATOES"],
  ["block.PUMPKIN_ACTIVE", "block.PUMPKIN_ACTIVE"],
  ["block.PUMPKIN_INACTIVE", "block.PUMPKIN_INACTIVE"],
  ["block.QUARTZ_BLOCK_CHISELED", "block.QUARTZ_BLOCK_CHISELED"],
  ["block.NETHER_QUARTZ_ORE", "block.NETHER_QUARTZ_ORE"],
  ["block.RAIL_ACTIVATOR", "block.RAIL_ACTIVATOR"],
  ["block.RAIL_DETECTOR", "block.RAIL_DETECTOR"],
  ["block.RAIL_GOLDEN", "block.RAIL_GOLDEN"],
  ["block.RAIL_NORMAL", "block.RAIL_NORMAL"],
  ["block.RED_SAND", "block.RED_SAND"],
  ["block.REDSTONE_TORCH_INACTIVE", "block.REDSTONE_TORCH_INACTIVE"],
  ["block.REDSTONE_TORCH_ACTIVE", "block.REDSTONE_TORCH_ACTIVE"],
  ["block.REDSTONE_REPEATER_INACTIVE", "block.REDSTONE_REPEATER_INACTIVE"],
  ["block.REDSTONE_REPEATER_ACTIVE", "block.REDSTONE_REPEATER_ACTIVE"],
  ["block.SAPLING_SPRUCE", "block.SAPLING_SPRUCE"],
  ["block.SAPLING_BIRCH", "block.SAPLING_BIRCH"],
  ["block.SAPLING_JUNGLE", "block.SAPLING_JUNGLE"],
  ["block.SAPLING_ACACIA", "block.SAPLING_ACACIA"],
  ["block.SAPLING_DARK_OAK", "block.SAPLING_DARK_OAK"],
  ["block.STONE_BRICK_CHISELED", "block.STONE_BRICK_CHISELED"],
  ["block.STONE_BRICK_CRACKED", "block.STONE_BRICK_CRACKED"],
  ["block.STONE_BRICK_MOSSY", "block.STONE_BRICK_MOSSY"],
  ["block.TRAPDOOR", "block.TRAPDOOR"],
  ["block.TRIPWIRE", "block.TRIPWIRE"],
  ["block.TRIPWIRE_HOOK", "block.TRIPWIRE_HOOK"],
  ["block.VINE", "block.VINE"],
  ["block.WATERLILY", "block.WATERLILY"],
  ["block.WHEAT", "block.WHEAT"],
  ["block.STAIRS_SPRUCE", "block.STAIRS_SPRUCE"],
  ["block.STAIRS_BIRCH", "block.STAIRS_BIRCH"],
  ["block.STAIRS_JUNGLE", "block.STAIRS_JUNGLE"],
  ["block.GLAZED_TERRACOTTA_WHITE", "block.GLAZED_TERRACOTTA_WHITE"],
  ["block.GLAZED_TERRACOTTA_ORANGE", "block.GLAZED_TERRACOTTA_ORANGE"],
  ["block.GLAZED_TERRACOTTA_MAGENTA", "block.GLAZED_TERRACOTTA_MAGENTA"],
  ["block.GLAZED_TERRACOTTA_LIGHT_BLUE", "block.GLAZED_TERRACOTTA_LIGHT_BLUE"],
  ["block.GLAZED_TERRACOTTA_YELLOW", "block.GLAZED_TERRACOTTA_YELLOW"],
  ["block.GLAZED_TERRACOTTA_LIME", "block.GLAZED_TERRACOTTA_LIME"],
  ["block.GLAZED_TERRACOTTA_PINK", "block.GLAZED_TERRACOTTA_PINK"],
  ["block.GLAZED_TERRACOTTA_GRAY", "block.GLAZED_TERRACOTTA_GRAY"],
  ["block.GLAZED_TERRACOTTA_LIGHT_GRAY", "block.GLAZED_TERRACOTTA_LIGHT_GRAY"],
  ["block.GLAZED_TERRACOTTA_CYAN", "block.GLAZED_TERRACOTTA_CYAN"],
  ["block.GLAZED_TERRACOTTA_PURPLE", "block.GLAZED_TERRACOTTA_PURPLE"],
  ["block.GLAZED_TERRACOTTA_BLUE", "block.GLAZED_TERRACOTTA_BLUE"],
  ["block.GLAZED_TERRACOTTA_BROWN", "block.GLAZED_TERRACOTTA_BROWN"],
  ["block.GLAZED_TERRACOTTA_GREEN", "block.GLAZED_TERRACOTTA_GREEN"],
  ["block.GLAZED_TERRACOTTA_RED", "block.GLAZED_TERRACOTTA_RED"],
  ["block.GLAZED_TERRACOTTA_BLACK", "block.GLAZED_TERRACOTTA_BLACK"],
  ["block.CONCRETE_BLOCK", "block.CONCRETE_BLOCK"],
  ["block.CONCRETE_BLOCK_WHITE", "block.CONCRETE_BLOCK_WHITE"],
  ["block.CONCRETE_BLOCK_ORANGE", "block.CONCRETE_BLOCK_ORANGE"],
  ["block.CONCRETE_BLOCK_MAGENTA", "block.CONCRETE_BLOCK_MAGENTA"],
  ["block.CONCRETE_BLOCK_LIGHT_BLUE", "block.CONCRETE_BLOCK_LIGHT_BLUE"],
  ["block.CONCRETE_BLOCK_YELLOW", "block.CONCRETE_BLOCK_YELLOW"],
  ["block.CONCRETE_BLOCK_LIME", "block.CONCRETE_BLOCK_LIME"],
  ["block.CONCRETE_BLOCK_PINK", "block.CONCRETE_BLOCK_PINK"],
  ["block.CONCRETE_BLOCK_GRAY", "block.CONCRETE_BLOCK_GRAY"],
  ["block.CONCRETE_BLOCK_LIGHT_GRAY", "block.CONCRETE_BLOCK_LIGHT_GRAY"],
  ["block.CONCRETE_BLOCK_CYAN", "block.CONCRETE_BLOCK_CYAN"],
  ["block.CONCRETE_BLOCK_PURPLE", "block.CONCRETE_BLOCK_PURPLE"],
  ["block.CONCRETE_BLOCK_BLUE", "block.CONCRETE_BLOCK_BLUE"],
  ["block.CONCRETE_BLOCK_BROWN", "block.CONCRETE_BLOCK_BROWN"],
  ["block.CONCRETE_BLOCK_GREEN", "block.CONCRETE_BLOCK_GREEN"],
  ["block.CONCRETE_BLOCK_RED", "block.CONCRETE_BLOCK_RED"],
  ["block.CONCRETE_BLOCK_BLACK", "block.CONCRETE_BLOCK_BLACK"],
  ["block.CONCRETE_POWDER", "block.CONCRETE_POWDER"],
  ["block.CONCRETE_POWDER_WHITE", "block.CONCRETE_POWDER_WHITE"],
  ["block.CONCRETE_POWDER_ORANGE", "block.CONCRETE_POWDER_ORANGE"],
  ["block.CONCRETE_POWDER_MAGENTA", "block.CONCRETE_POWDER_MAGENTA"],
  ["block.CONCRETE_POWDER_LIGHT_BLUE", "block.CONCRETE_POWDER_LIGHT_BLUE"],
  ["block.CONCRETE_POWDER_YELLOW", "block.CONCRETE_POWDER_YELLOW"],
  ["block.CONCRETE_POWDER_LIME", "block.CONCRETE_POWDER_LIME"],
  ["block.CONCRETE_POWDER_PINK", "block.CONCRETE_POWDER_PINK"],
  ["block.CONCRETE_POWDER_GRAY", "block.CONCRETE_POWDER_GRAY"],
  ["block.CONCRETE_POWDER_LIGHT_GRAY", "block.CONCRETE_POWDER_LIGHT_GRAY"],
  ["block.CONCRETE_POWDER_CYAN", "block.CONCRETE_POWDER_CYAN"],
  ["block.CONCRETE_POWDER_PURPLE", "block.CONCRETE_POWDER_PURPLE"],
  ["block.CONCRETE_POWDER_BLUE", "block.CONCRETE_POWDER_BLUE"],
  ["block.CONCRETE_POWDER_BROWN", "block.CONCRETE_POWDER_BROWN"],
  ["block.CONCRETE_POWDER_GREEN", "block.CONCRETE_POWDER_GREEN"],
  ["block.CONCRETE_POWDER_RED", "block.CONCRETE_POWDER_RED"],
  ["block.CONCRETE_POWDER_BLACK", "block.CONCRETE_POWDER_BLACK"]
];

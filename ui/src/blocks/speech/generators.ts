export default function define(Python: Blockly.BlockGenerators) {

  Python['imspeech'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'import speech\n';
    return code;
  };

  Python['speechsay'] = function (block) {
    const text_words = block.getFieldValue('words');
    // TODO: Assemble Python into code variable.
    const code = 'speech.say("' + text_words + '")\n';
    return code;
  };

  Python['speechpro'] = function (block) {
    const text_pro = block.getFieldValue('pro');
    // TODO: Assemble Python into code variable.
    const code = 'speech.pronounce("' + text_pro + '")\n';
    return code;
  };

  Python['speechsing'] = function (block) {
    const text_sing = block.getFieldValue('sing');
    // TODO: Assemble Python into code variable.
    const code = 'speech.sing("' + text_sing + '")\n';
    return code;
  };
}

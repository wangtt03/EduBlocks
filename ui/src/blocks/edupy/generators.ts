export default function define(Python: Blockly.BlockGenerators) {
  Python['led_on'] = function (block) {
    const dropdown_led_colour = block.getFieldValue('led_colour');
    // TODO: Assemble Python into code variable.
    const code = dropdown_led_colour + '_led_on()\n';
    return code;
  };

  Python['led_off'] = function (block) {
    const dropdown_led_colour = block.getFieldValue('led_colour');
    // TODO: Assemble Python into code variable.
    const code = dropdown_led_colour + '_led_off()\n';
    return code;
  };

  Python['button_pressed'] = function (block) {
    const code = 'button_pressed()\n';
    return code;
  };

  Python['all_on'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'all_on()\n';
    return code;
  };

  Python['all_off'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'all_off()\n';
    return code;
  };

  Python['all_blink'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'all_blink()\n';
    return code;
  };

  Python['button'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'button_test()\n';
    return code;
  };

  Python['buzzer'] = function (block) {
    const dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    const code = 'buzzer_' + dropdown_name + '()\n';
    return code;
  };

  Python['blink'] = function (block) {
    const dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    const code = dropdown_name + '_led_blink()\n';
    return code;
  };

  Python['user_input'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'user_input()\n';
    return code;
  };

  Python['crossing'] = function (block) {
    const dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    const code = dropdown_name + '()\n';
    return code;
  };

  Python['dot'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'dot()\n';
    return code;
  };

  Python['dash'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'dash()\n';
    return code;
  };

  Python['letter'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'letter_space()\n';
    return code;
  };

  Python['word'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'word_space()\n';
    return code;
  };

  Python['2led_on'] = function (block) {
    const dropdown_led_colour = block.getFieldValue('led_colour');
    // TODO: Assemble Python into code variable.
    const code = dropdown_led_colour + '_led_on()\n';
    return code;
  };

  Python['2led_off'] = function (block) {
    const dropdown_led_colour = block.getFieldValue('led_colour');
    // TODO: Assemble Python into code variable.
    const code = dropdown_led_colour + '_led_off()\n';
    return code;
  };

  Python['2buzzer'] = function (block) {
    const dropdown_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    const code = 'buzzer_' + dropdown_name + '()\n';
    return code;
  };

  Python['temperature'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'temperature()\n';
    return code;
  };

  Python['ldr'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'ldr()\n';
    return code;
  };

  Python['capacitor'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'capacitor_drain()\n';
    return code;
  };

  Python['motion'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'motion_reading()\n';
    return code;
  };

  Python['alarm'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'alarm()\n';
    return code;
  };

  Python['forward'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'forward()\n';
    return code;
  };

  Python['backward'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'backward()\n';
    return code;
  };

  Python['turn_left'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'turn_left()\n';
    return code;
  };

  Python['turn_right'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'turn_right()\n';
    return code;
  };

  Python['stop'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'stop()\n';
    return code;
  };

  Python['get_reading'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'get_reading()\n';
    return code;
  };

  Python['line_test'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'line_test()\n';
    return code;
  };

  Python['key_control'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'key_control()\n';
    return code;
  };

  Python['line_follower'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'line_follower()\n';
    return code;
  };

  Python['avoid'] = function (block) {
    // TODO: Assemble Python into code variable.
    const code = 'avoid()\n';
    return code;
  };
}
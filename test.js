'use strict';

let assert = require('assert'),
    TextWriter = require('./index');

describe('TextWriter', function() {

  let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\n";

  describe('Write', function() {

    it('should be ok', function() {

      let content = TextWriter
        .create()
        .write('Lorem ipsum dolor sit amet, ')
        .writeFormat('consectetur %s elit, ', 'adipisicing')
        .writeLine('sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        .write('Ut enim ad minim veniam, ')
        .writeFormat('quis %s exercitation %s laboris ', 'nostrud', 'ullamco')
        .writeLine('nisi ut aliquip ex ea commodo consequat.')
        .write('Duis aute irure dolor in reprehenderit in voluptate ')
        .writeLine('velit esse cillum dolore eu fugiat nulla pariatur.')
        .write('Excepteur sint occaecat cupidatat non proident, ')
        .writeFormat('sunt %s culpa %s officia %s ', 'in', 'qui', 'deserunt')
        .writeLine('mollit anim id est laborum.')
        .writeLine()
        .toString();

      assert.ok(lorem === content);

    });

  });

});

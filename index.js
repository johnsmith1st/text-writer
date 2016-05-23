'use strict';

let util = require('util');

module.exports = class TextWriter {

  /**
   * @constructor
   * @param {object} [opts]
   * @param {string} [opts.eol] - default is '\r\n'
   * @param {string} [opts.separator] - default is empty string ''
   */
  constructor(opts) {

    opts = opts || {};
    opts.eol = opts.eol || '\r\n';
    opts.separator = opts.separator || '';

    /**
     * @type {{eol: string, separator: string}}
     * @private
     */
    this._opts = opts;

    /**
     * @type {Array<string>}
     * @private
     */
    this._buffer = [];
  }

  /**
   * Clear buffer.
   */
  clear() {
    this._buffer.length = 0;
  }

  /**
   * Write string to buffer.
   * @param {string} str
   * @returns {TextWriter}
   */
  write(str) {
    this._buffer.push(str);
    return this;
  }

  /**
   * Write formatted string to buffer.
   * @param {string} format
   * @returns {TextWriter}
   */
  writeFormat(format) {
    return this.write(
      util.format.apply(util.format, Array.prototype.slice.call(arguments))
    );
  }

  /**
   * Write string and end of line.
   * @param {string} [str]
   * @returns {TextWriter}
   */
  writeLine(str) {
    if (str && str.length) this.write(str);
    return this.write(this._opts.eol);
  }

  /**
   * Cast everything into string.
   * @returns {string}
   */
  toString() {
    return this._buffer.join(this._opts.separator);
  }

  /**
   * Create a new writer.
   * @returns {TextWriter}
   */
  static create() {
    return new TextWriter();
  }

};

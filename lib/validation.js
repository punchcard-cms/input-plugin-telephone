'use strict';

/**
 * Validation for Telephone Input Plugin
 *
 * @param {Object} input - inputs in this plugin's instance and their values as {String}
 * @param {Object} input.target - the triggering input's name and value as {String}
 * @param {String} input.target.name - the triggering input's name
 * @param {String|Bool} input.target.value - the triggering input's value
 * @param {Object} input.all - all inputs in this plugin's instance
 * @param {String|Bool} input.all.telephone - value of input telephone
 * @param {Object} [settings] - settings for this input plugin instance
 * @param {Object} [settings.target] - the triggering input's settings as an {Object}
 * @param {Object} [settings.all] - all settings in this plugin instance as an {Object}
 * @param {Object} [settings.all.telephone] - settings of input telephone {Object}
 *
 * @returns {Bool|String} true or a string with the text describing the error
 *
 * @module telephoneValidation
 */
const isMobilePhone = require('validator/lib/isMobilePhone');

module.exports = function telephoneValidation(input, settings) {
  // disable eslint for var because this is a browser-bound script
  var locale = 'en-US'; // eslint-disable-line no-var

  // check settings for locale
  if (settings.hasOwnProperty('target') && settings.target.hasOwnProperty('locale') && settings.target.locale !== '' && typeof settings.target.locale === 'string') {
    locale = settings.target.locale;
  }

  if (input.target.value && !isMobilePhone(input.target.value, locale)) {
    return `${input.target.name} must be a phone number`;
  }

  return true;
};

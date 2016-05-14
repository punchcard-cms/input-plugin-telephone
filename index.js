/**
 * Telephone Input Plugin
 *
 *
 * Simple input plugin for a telephone number
 */
const validation = require('./lib/validation.js');

/**
 * Single Telephone Input Plugin
 * @module telephoneInputPlugin
 */
module.exports = {
  name: 'Telephone',
  description: 'Simple input plugin for a telephone number',
  validation: {
    telephoneValidation: validation,
  },
  inputs: {
    telephone: {
      validation: {
        function: 'telephoneValidation',
        on: 'blur',
      },
      label: 'Please enter your telephone number',
      placeholder: '(xxx)xxx-xxxx',
      type: 'tel',
      settings: {
        empty: true,
      },
    },
  },
  html: '<label for="{{telephone.id}}">{{telephone.label}}</label><input type="{{telephone.type}}" id="{{telephone.id}}" name="{{telephone.name}}" value="{{telephone.value}}" placeholder="{{telephone.placeholder}}" />',
};

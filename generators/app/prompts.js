'use strict';
const utils = require('../../utils/yeoman');

module.exports = [
  {
    type: 'input',
    name: 'appName',
    message: 'App name',
    default: utils.getAppName()
  },
  {
    type: 'input',
    name: 'author',
    message: 'Your name'
  }
];

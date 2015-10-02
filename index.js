/* jshint node: true */
'use strict';
var SSHAdapter = require('./lib/ssh-adapter');

module.exports = {
  name: 'ember-cli-deploy-ssh-assets',
  type: 'ember-deploy-addon',
  adapters: {
    assets: {
      'ssh': SSHAdapter
    }
  }
};

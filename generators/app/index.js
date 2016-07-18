'use strict';
const Generators = require('yeoman-generator');
const fs = require('fs');
const packageInfo = require('../../package.json');
const path = require('path');
const prompts = require('./prompts');
const utils = require('../../utils/yeoman');
const _ = require('lodash');

// Set the base root directory for our files. Make sure to always use the node_modules
// base path instead of the require call only. This is needed because require.resolve
// also includes the path set in package.json main keys!
const baseRootPath = path.dirname(require.resolve('ractive-webpack-boilerplate'));

/**
 * Base generator. Will copy all required files from ractive-webpack-boilerplate
 */
class AppGenerator extends Generators.Base {
  constructor(args, options) {
    super(args, options);

    // Make options available
    this.option('skip-welcome-message', {
      desc: 'Skip the welcome message',
      type: Boolean,
      defaults: false
    });
    this.option('skip-install');

    // Use our plain template as source
    this.sourceRoot(baseRootPath);

    this.config.save();
  }

  initializing() {
    if (!this.options['skip-welcome-message']) {
      this.log('Ractive Webpack Generator');
    }
  }

  prompting() {
    return this.prompt(prompts).then((answers) => {
      // Make sure to get the correct app name if it is not the default
      if (answers.appName !== utils.getAppName()) {
        answers.appName = utils.getAppName(answers.appName);
      }

      // Set needed global vars for yo
      this.appName = answers.appName;
      this.generatedWithVersion = parseInt(packageInfo.version.split('.').shift(), 10);

      // Set needed keys into config
      this.config.set('appName', this.appName);
      this.config.set('appPath', this.appPath);
      this.config.set('author', this.author);
      this.config.set('generatedWithVersion', this.generatedWithVersion);
    });
  }

  configuring() {
    // Generate our package.json. Make sure to also include the required dependencies for styles
    const packageJson = this.fs.readJSON(`${baseRootPath}/package.json`);
    const defaultSettings = _.omitBy(packageJson, (i, key) => key.startsWith('_'));
    let packageSettings = _.extend(defaultSettings, {
      name: this.appName,
      private: true,
      version: '0.0.0',
      description: this.appName,
      main: 'src/index.js',
      author: this.author
    });

    this.fs.writeJSON(this.destinationPath('package.json'), packageSettings);
  }

  writing() {
    const excludeList = [
      'node_modules',
      'package.json'
    ];

    // Get all files in our repo and copy the ones we should
    fs.readdir(this.sourceRoot(), (err, items) => {
      for (let item of items) {
        // Skip the item if it is in our exclude list
        if (excludeList.indexOf(item) !== -1) {
          continue;
        }

        // Copy all items to our root
        let fullPath = path.join(baseRootPath, item);
        if (fs.lstatSync(fullPath).isDirectory()) {
          this.bulkDirectory(item, item);
        } else {
          if (item === '.npmignore') {
            this.copy(item, '.gitignore');
          } else {
            this.copy(item, item);
          }
        }
      }
    });
  }

  install() {
    if (!this.options['skip-install']) {
      this.installDependencies({
        bower: false
      });
    }
  }
}

module.exports = AppGenerator;

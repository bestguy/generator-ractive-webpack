'use strict';

const path = require('path');
const _ = require('underscore.string');

// Needed directory paths
const baseName = path.basename(process.cwd());

/**
 * Get the base directory
 * @return {String}
 */
const getBaseDir = () => baseName;

/**
 * Get a js friendly application name
 * @param  {String} appName The input application name [optional]
 * @return {String}
 */
const getAppName = appName => _.slugify(_.humanize(appName || getBaseDir()));

module.exports = {
  getBaseDir,
  getAppName
};

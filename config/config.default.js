/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615170136676_3110';

  // add your middleware config here
  config.middleware = [];

  config.view = {
    root: path.join(appInfo.baseDir, 'app/public'),
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.html': 'nunjucks'
    }
  }

  config.assets = {
    publicPath: '/public/',
    devServer: {
        enable: false
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};

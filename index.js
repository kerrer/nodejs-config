/**
 * Index.js
 *
 * @auther: harish <twitter:@harishanchu>
 * Copyright (c) 2014, Harish Anchu. All rights reserved.
 */

var Config = require('./lib/config/Config');
var FileLoader = require('./lib/config/FileLoader');
var environmentDetector = require('./lib/config/environmentDetector');
var path = require('path');
var helper = require('./lib/support/helper');

module.exports = function (configDirPath, environments) {
	 var env = helper.isset(environments) ? environmentDetector.detect(environments): process.env.NODE_ENV;
     configDirPath = helper.isset(configDirPath) ? configDirPath : process.env.CONF_DIR;

     return new Config(new FileLoader(configDirPath), env);
};

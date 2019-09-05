/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
  const config = (exports = {});

  //  * built-in config
  //  * @type {Egg.EggAppConfig}
  //  **/

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1567151214346_4991';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    bodyParser: {
      jsonLimit: '1mb',
      formLimit: '1mb',
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    mysql: {
      client: {
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '123321',
        database: '1701g2_exam',
      },
      app: true,
      agent: false,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};

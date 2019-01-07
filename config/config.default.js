'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545897509620_1487';

  // add your config here
  config.middleware = ['csrfAuth'];

  // 配置模板引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    }
  }

  // 配置本地数据库
  config.sequelize = {
    dialect: 'mysql',
    database: 'yofcIM_development',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '',
  }

  config.passportLocal = {
    usernameField: 'username',
    passwordField: 'password'
  }

  // 配置session
  config.session = {
    // maxAge: 5000,
    key: 'YOFC_IM_SESSION_ID',
    httpOnly: true,
    encrypt: true,
    // 如果设置renew为true,每次刷新页面的时候 session都会被延期
    // renew: true
  }

  return config;
};

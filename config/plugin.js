'use strict';

// had enabled by egg
// exports.static = true;
exports.ejs = {
    enable: true,
    package: 'egg-view-ejs',
}

// 数据库ORM插件 sequelize
exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
}

exports.passport = {
    enable: true,
    package: 'egg-passport',
}

exports.passportLocal = {
    enable: true,
    package: 'egg-passport-local',
}

exports.jwt = {
    enable: true,
    package: 'egg-passport-local',
}


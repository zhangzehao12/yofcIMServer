'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.render);
  router.get('/signIn', controller.home.signIn);
  router.get('/logOut', controller.home.logout);

  // router.get('/register', controller.home.reg);

  // router.post('/doRegister', controller.home.doReg);

  const localStrategy = app.passport.authenticate('local', {
    successRedirect: '/'
  });
  // 登录
  router.post('/passport/local', localStrategy);

  // 已接入的应用列表页面
  router.get('/applist', controller.applist.index);

  // 新建一个应用
  router.post('/api/create_app', controller.applist.create);
  // 新建一个用户
  router.post('/api/create_user', controller.appDetail.create);

  // 每个应用的单独管理页面
  router.get('/applist/:projectId', controller.appDetail.index);

  // 获取指定id应用下面所有的用户信息列表
  router.get('/applist/:projectId/memberlist', controller.appDetail.getMemberlist);

  //生成第三方js
  router.get('/api/get_script', controller.generateScript.index)

};

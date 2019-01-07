'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 输出首页（无需登录查看）
  async render() {
    const ctx = this.ctx;
    if (ctx.isAuthenticated()) {
      await ctx.render('home');
    } else {
      // redirect to origin url by ctx.session.returnTo
      ctx.session.returnTo = ctx.path;
      // 未登录跳转去登录页面
      await this.ctx.render('signIn');
    }
  }

  // 输出注册页面
  async reg() {
    await this.ctx.render('register');
  }

  async doReg() {
    var params = this.ctx.request.body;
    this.service.userAuth.doReg(params);
  }

  // 输出登录页面
  async signIn() {
    // const { ctx } = this;
    await this.ctx.render('signIn');
  }

  // async logout() {
  //   const ctx = this.ctx;
  //   ctx.logout();
  //   ctx.redirect(ctx.get('referer') || '/');
  // }
}

module.exports = HomeController;

'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 输出首页（无需登录查看）
  async render() {
    const ctx = this.ctx;
    if (ctx.user) {
      var userName = ctx.user.userName;
    }

    if (ctx.isAuthenticated()) {
      await ctx.render('home', {
        userName
      });
    } else {
      // redirect to origin url by ctx.session.returnTo
      ctx.session.returnTo = ctx.path;
      // 未登录跳转去登录页面
      await this.ctx.render('signIn', {
        userName
      });
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
    const ctx = this.ctx;
    if (ctx.user) {
      var userName = ctx.user.userName;
    }
    await this.ctx.render('signIn', {
      userName
    });
  }

  // 登出
  async logout() {
    const ctx = this.ctx;
    ctx.logout();
    // console.log('referer:', ctx.get('referer')) // http://localhost:7001/
    ctx.redirect(ctx.get('referer') || '/');
  }
}

module.exports = HomeController;

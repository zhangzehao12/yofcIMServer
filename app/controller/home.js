'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  // 输出首页（无需登录查看）
  async render() {
    const ctx = this.ctx;
    if (ctx.user) {
      var userName = ctx.user.userName;
    }

    await ctx.render('home', {
      userName
    });
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

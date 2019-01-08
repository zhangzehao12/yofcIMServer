'use strict';

const Controller = require('egg').Controller;

class AppDetailController extends Controller {
    async index() {
        const ctx = this.ctx;
        if (ctx.user) {
            var userName = ctx.user.userName;
        }
        await this.ctx.render('appDetail', {
            userName
        });
    }

}

module.exports = AppDetailController;

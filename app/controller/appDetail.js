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

    async getMemberlist() {
        const ctx = this.ctx;
        const projectId = ctx.params.projectId;

        // ctx.body = '213'
    }

}

module.exports = AppDetailController;

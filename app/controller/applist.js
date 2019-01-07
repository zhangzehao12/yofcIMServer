'use strict';

const Controller = require('egg').Controller;

class ApplistController extends Controller {
    async index() {
        const ctx = this.ctx;
        //项目列表数据
        const projectList = await ctx.service.project.getAllProjects({
            attributes: ['projectId', 'projectName', 'describe']
        });

        console.log(projectList);

        if (ctx.user) {
            var userName = ctx.user.userName;
        }
        if (ctx.isAuthenticated()) {
            await this.ctx.render('applist', {
                userName
            });
        } else {
            ctx.redirect('/signIn');
        }
    }
}

module.exports = ApplistController;

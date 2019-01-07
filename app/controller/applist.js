'use strict';

const Controller = require('egg').Controller;

class ApplistController extends Controller {
    // 默认显示应用项目列表
    async index() {
        const ctx = this.ctx;
        // 项目列表数据
        const listData = [];
        //项目列表数据
        const projectList = await ctx.service.project.getAllProjects({
            attributes: ['projectId', 'projectName', 'describe']
        });

        // console.log(projectList);
        for (let i = 0; i < projectList.length; i++) {
            let temp = {
                projectName: projectList[i].projectName,
                projectId: projectList[i].projectId,
                describe: projectList[i].describe
            }
            listData.push(temp);
        }

        if (ctx.user) {
            var userName = ctx.user.userName;
        }
        // console.log(listData);

        if (ctx.isAuthenticated()) {
            await this.ctx.render('applist', {
                userName,
                listData
            });
        } else {
            ctx.redirect('/signIn');
        }
    }

    // 新建一个项目
    async create() {
        // SUCCESS_CODE: 0, // 成功
        // NO_LOGIN_CODE: 100, // 未登录
        // UNIQUE_CODE: 200, // 唯一性冲突
        // ERROR_CODE: 500, // 失败

        const ctx = this.ctx;
        var params = ctx.request.body;
        // console.log(params)
        const newProject = await ctx.service.project.createProject({
            projectName: params.projectName,
            describe: params.describe
        })
        //如果插入成功
        if (newProject) {
            this.ctx.body = {
                code: 0, data: {
                    uuid: newProject.projectId
                }
            };
            this.ctx.status = 200;
        } else {
            this.ctx.body = {
                code: 500, data: {
                    msg: '新增项目失败!',
                }
            }
            this.ctx.status = 200;
        }
    }
}

module.exports = ApplistController;

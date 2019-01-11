'use strict';
const utils = require('utility');
const Controller = require('egg').Controller;

class AppDetailController extends Controller {
    async index() {
        const ctx = this.ctx;
        const projectId = ctx.params.projectId;
        if (ctx.user) {
            var userName = ctx.user.userName;
        }
        await this.ctx.render('appDetail', {
            userName,
            projectId
        });
    }

    async getMemberlist() {
        const ctx = this.ctx;
        const params = ctx.request.body;
        const projectId = ctx.request.query.projectId;
        params.projectId = projectId;

        const responseJSON = {
            draw: params.draw * 1,
            recordsTotal: 0,
            recordsFiltered: 0,
            data: []
        }
        // console.log('==================');
        // console.log(params);
        const userlist = await ctx.service.member.getUserList(params);
        console.log(userlist);
        responseJSON.recordsTotal = userlist.count;
        responseJSON.recordsFiltered = userlist.count;
        // console.log(userlist);
        if (userlist && userlist.rows) {
            const userlistArr = userlist.rows;
            for (let i = 0; i < userlistArr.length; i++) {
                let temp = [userlistArr[i].userId,
                userlistArr[i].userName,
                userlistArr[i].orginPassword,
                userlistArr[i].project.projectName,
                userlistArr[i].created_at
                ];
                responseJSON.data.push(temp);
            }
        }

        if (userlist) {
            this.ctx.body = responseJSON;
            this.ctx.status = 200;
        } else {
            this.ctx.body = {
                code: 500, data: {
                    msg: '查询用户失败!',
                }
            }
            this.ctx.status = 200;
        }

    }

    async create() {
        const ctx = this.ctx;
        var params = ctx.request.body;
        // console.log(params)
        const newProject = await ctx.service.member.createMember({
            userName: params.userName,
            password: utils.md5(params.password),
            orginPassword: params.password,
            projectId: params.projectId,
        })
        //如果插入成功
        if (newProject) {
            this.ctx.body = {
                code: 0, data: {
                    uuid: newProject.userId
                }
            };
            this.ctx.status = 200;
        } else {
            this.ctx.body = {
                code: 500, data: {
                    msg: '新增用户失败!',
                }
            }
            this.ctx.status = 200;
        }
    }

}

module.exports = AppDetailController;

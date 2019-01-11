'use strict';

const Service = require('egg').Service;
const axios = require('axios');
const SHA1 = require('sha1');
const moment = require('moment');

class MemberService extends Service {
    /**
       * 新增用户
       * @param {object} 待插入记录字段
       * @return {object|null}-插入结果
       */
    async createMember(params) {

        // const yunXinRes = await this.createYunXinID(params);

        // console.log(yunXinRes)
        const result = await this.app.model.User.Member.create(params);
        const yunXinRes = await this.createYunXinID({
            userId: result.userId,
            userName: result.userName
        });
        console.log('=====================')
        console.log(yunXinRes);

        return result;
    }

    /**
     * 获取用户列表，支持分页
     */
    async getUserList(params) {
        const Project = require('../model/project.js')(this.app);

        return await this.app.model.User.Member.findAndCountAll({
            attributes: ['userId', 'userName', 'orginPassword', 'created_at'],
            where: {
                projectId: params.projectId
            },
            include: [
                { model: Project, required: true }
            ],
            offset: params.start * 1,
            limit: params.length * 1
        })
    }


    /**
     * 创建网易云信ID
     */

    async createYunXinID(params) {
        console.log('==============================');
        console.log(params);
        const AppSecret = '4ae55548d4d8';
        const AppKey = '33a82359d5e0bec7c459ccbf7fe72c78';
        const Nonce = '12345';
        const CurTime = moment().unix();

        return await axios.request(
            {
                url: 'https://api.netease.im/nimserver/user/create.action',
                method: 'post',
                data: JSON.stringify({
                    accid: params.userId,
                    name: params.userName
                }),
                headers: {
                    'AppKey': AppKey,
                    'Nonce': Nonce,
                    'CurTime': CurTime,
                    'CheckSum': SHA1(AppSecret + Nonce + CurTime),
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
                },
            });
    }
}

module.exports = MemberService;

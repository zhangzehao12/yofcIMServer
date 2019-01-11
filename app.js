module.exports = app => {
    app.passport.verify(async (ctx, user) => {

        const existsAdmin = await ctx.service.admin.getAdminByLogin(user.username,
            user.password);
        // console.log(existsAdmin);
        //查到了登录admin信息
        return existsAdmin;
    });

    //将用户信息序列化后存进session里面，一般要精简,只保存个别字段
    app.passport.serializeUser(async (ctx, user) => {
        // console.log({
        //     adminId: user.adminId,
        //     userName: user.userName
        // })
        return {
            adminId: user.adminId,
            userName: user.userName
        }
    });

    //反序列化后把用户信息从session里面取出来，反查数据库拿到完整信息
    // app.passport.deserializeUser(async (ctx, user) => {

    // });
}
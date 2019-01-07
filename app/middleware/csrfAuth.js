module.exports = (option, app) => {
    return async function csrfAuth(ctx, next) {
        //设置全局变量
        ctx.state.csrf = ctx.csrf;
        await next();
    }
}
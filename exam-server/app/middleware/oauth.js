module.exports = (opt, app) => {
    return async function gzip(ctx, next) {
        const { header } = ctx.request

        if (!header.authorization) {
            ctx.status = 401;
            ctx.body = {
                code: 0,
                msg: '没有权限,缺少authorization'
            }
        } else if (!header.uid) {
            ctx.status = 401;
            ctx.body = {
                code: 0,
                msg: '没有权限,缺少uid'
            }
        } else {
            const token = await ctx.service.user.verify(header.uid)
            if (token === header.authorization) {
                await next()
            } else {
                ctx.status = 401;
                ctx.body = {
                    code: 0,
                    msg: '没有权限'
                }
            }
        }
    }
}
module.exports = async (ctx , next) =>{

    const start = Date.now()

    await next()

    const end = Date.now()

    const duration = end - start
    //设置响应头
    ctx.set('X-Response-Time',duration + 'ms')
}
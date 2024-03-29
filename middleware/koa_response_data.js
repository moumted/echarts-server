const path = require('path')
const fileUtils = require('../utils/file_utils')

module.exports = async (ctx,next)=>{
    const url = ctx.request.url
    let filePath = url.replace('/api','')
    filePath = '../data' + filePath + '.json'
    filePath = path.join(__dirname,filePath)  //__dirname指该文件夹的路径
    try{
        const ret = await fileUtils.getFileJsonData(filePath)
        ctx.response.body = ret
    }catch(error){
        const errorMsg = {
            message : '读取文件失败，文件不存在',
            status : 404
        }
        ctx.response.body = JSON.stringify(errorMsg)
    }
    
    await next()
}
// sign in:

module.exports = {
    'POST /sensor': async (ctx, next) => {
        var url = ctx.request.url;
        var params = url.substr(9).split('&');
        params.forEach(item => {
            var pair = item.split('=');
            if(pair[0] == 'send'){
                if(pair[1] == 'data'){
                    console.log(ctx.request.body);// 显示接收到的信息
                    ctx.response.body = JSON.stringify(ctx.request.body); // 返回给传感器它发过来的信息，不过后面开发不需要返回给传感器
                }
                else if(pair[1] == 'value2'){
                    // do something
                }
            }
            else if(pair[0] == 'key2'){
                if(pair[1] == 'value3'){
                    // do something
                }
                else if(pair[1] == 'value4'){
                    // do something
                }
            }
        });
    }
}


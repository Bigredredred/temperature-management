// sign in:

module.exports = {
    'GET /': async (ctx, next) => {
        if(ctx.request.url == '/'){
            ctx.render('index.html');
        }
        else{
            var url = ctx.request.url;
            var params = url.substr(2).split('&')
            params.forEach(item => {
                var pair = item.split('=');
                if(pair[0] == 'key'){
                    if(pair[1] == 'value'){
                        // do something
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
};

var fs = require('fs');

//在真实的开发中id肯定是随机生成的而且不会重复的，下一篇写如何生成随机切不会重复的随机数，现在就模拟一下假数据*/
//写入json文件选项

function writeJson(params){
    //现将json文件读出来
    fs.readFile('./Data/data.json',function(err,data){
        if(err){
            return console.error(err);
        }
        var tmptdata = data.toString();//将二进制的数据转换为字符串
        tmptdata = JSON.parse(tmptdata);//将字符串转换为json对象
        tmptdata.data.push(params);//将传来的对象push进数组对象中
        //tmptdata.total = tmptdata.data.length;//定义一下总条数，为以后的分页打基础
        var str = JSON.stringify(tmptdata);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
        fs.writeFile('./Data/data.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('----------一条数据保存成功-------------');
        })
    })
}



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
                    writeJson(ctx.request.body);//将数据放入JSON文件中保存
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


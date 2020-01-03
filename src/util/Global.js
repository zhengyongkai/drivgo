const env =  'dev' //prod

const getRequest= {
    env:env,
    getIFE: function (key, env = Global_fazhi.env) {
        return getRequest[`${env}Interface`][key];
    },
    devInterface:{ //开发接口
         
    },
    prodInterface:{ //正式借口

    }
}
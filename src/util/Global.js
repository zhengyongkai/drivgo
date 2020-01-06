
import axios from 'axios'
const env =  'dev' //prod

export const getRequest= {
    env:env,
    getIFE: function (key, env = Global_fazhi.env) {
        return getRequest[`${env}Interface`][key];
    },
    devInterface:{ //开发接口
         
    },
    prodInterface:{ //正式借口

    },
    request:(data)=>{
        return new Promise((resolve,reject)=>{
            axios({
                ...data
            }).then((res)=>{
                resolve(res.data)
            }).catch((res)=>{
                reject(res)
            })
        })
    }
}

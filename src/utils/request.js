import axios from 'axios'
import router from '@/router'
// 手动创建一个 axios 对象, 参考: https://github.com/axios/axios#creating-an-instance 

//let url = 'http://192.168.100.166' // 本地
// let url = 'http://www.bos.com' // 本地
let url = 'http://demo.bos.nuomayun.com' // 测试

const request = axios.create({  
    // 请求配置参考: https://github.com/axios/axios#request-conﬁg  
    // 根据不同环境设置 baseURL, 终发送请求时的URL为: baseURL + 发送请求时写URL ,  
    // 比如 get('/test'), 终发送请求是: /dev-api/test  
    // baseURL: '/dev-api',  
    // 根目录下的 .env.development 与 .env.production 中配置 VUE_APP_BASE_API process.env.VUE_APP_BASE_API
    baseURL: url,  
    timeout: 5000, // 请求超时
})

/// 请求拦截器
// request.interceptors.request.use(    
//     config => {

//         if (config.type == 'form') {
//             config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//         } 
//         //  每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
//         //  即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
//         const token = localStorage.getItem('token')
//         //const token = 'a08e6bb0-a042-4ffa-9e4a-73a87c0a8da0'; /// 本地调试
//         token && (config.headers.token = token);       
//         return config;      
//     },    
//     error => {        
//         return Promise.error(error);    
//     }
// )

/// 响应拦截器
// request.interceptors.response.use(    
//     response => { 
//         console.log(response)
//         if (response.data.code === 401) {   
//             return response 
//         } else {            
//             return response        
//         }    
//     },
//     // 服务器状态码不是200的情况    
//     error => {
//         const { status } = error.response
//         if (status == 401) {
//             // 清除token
//             localStorage.clear();
//             // 登录
//             router.replace({ name:'login' }) 
//         }
//         return Promise.reject(error);}
// );

export default request /// 导出 axios 对象
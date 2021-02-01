import axios from 'axios'
import store from '../store'
import app from '../main'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    // 超时时间
    timeout: 60000
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let token = localStorage.getItem('mytoken');
    config.headers["Authorization"] = "Bearer " + token
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    let {status} = error.response;
    if(status == 401){
        // 调用vuex里的removeToken方法，移除存储器里的Token
        store.dispatch('removeToken')
        // location.href = "/login"
        app.$router.push('/login');//这里直接使用app来引用Vue实例
    }
    return Promise.reject(error);
});
export default instance


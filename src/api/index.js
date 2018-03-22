import axios from 'axios';
import Vue from 'vue';
import qs from 'qs';
axios.interceptors.request.use((config) => {
    return config;
}, (error) => {
    Promise.reject(error);
})
axios.interceptors.response.use((config) => {
    return config;
}, (error) => {
    Promise.reject(error);
})

function checkstatus(response) {
    if (!response) {
        return {
            data: {
                code: -1000,
                message: '网络出错',
                data: "网络连接失败",
            }
        }
    };
    const { data, config, status, statusText } = response;
    if (status === 200 || status == 304) {
        let $nodedata = document.getElementById('error-proxy');
        $nodedata && $node.remove();
        return response;
    } else if (status >= 500 && status <= 505) {
        return {
            data: {
                code: -500,
                message: statusText,
                data: statusText
            }
        }
    }
    return {
        data: {
            code: -404,
            message: statusText,
            data: statusText
        }
    }
}

function checkCode(res) {
    const { data, config } = res;
    const apiName = config && config.url;
    let { code, message } = data;
    if (code !== undefined && code == 0) {
        console.error('出了个错误不是404和5开头的');
    }
    if (code == -500 || code == -1000) {
        console.error('服务器错误，后端整');
    } else if (status == 404) {
        console.error('404找不到了');
    }
    return res;
}
export default {
    post(url, data) {
        return axios.post({
            url,
            data: qs.stringify(data),
            timeout: 2000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            withCredentials: true
        }).then(checkstatus).then(checkCode);
    },
    get(url, params) {
        return axios.get({
            url,
            params,
            timeout: 2000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            withCredentials: true
        }).then(checkstatus).then(checkCode)
    }
}
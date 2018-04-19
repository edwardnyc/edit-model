// 配置文件
const host = location.host;
const domain = location.origin;
let apiHost = '/api';
let wapiHost = '/wapi'
let baseurl = "";
if (host.includes('www.ztwlxx.club')) {
    baseurl = 'http://api.ztwlxx.club';
    apiHost = '';
}

module.exports = {
    proxy: {
        baseurl: baseurl,
        apiHost: apiHost,
        wapiHost: wapiHost
    },
};
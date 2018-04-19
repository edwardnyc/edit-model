import Vue from 'vue';
import request from 'utils/request';
import config from '../config';

const url = config.proxy.apiHost;
const wx_url = config.proxy.wapiHost;

export default {
    actions: {
        list({}, obj) {
            return request.post(`${url}/user/app/getlist`, obj);
        },
        auth({}, obj) {
            return request.post(`${url}/wechat/authorize/url`, obj);
        },
        author({}, obj) {
            return request.post(`${url}/wechat/authorize/callback`, obj);
        },
        huitiao({}, obj) {
            return request.post(`${url}/wechat/authorize/callback`, obj);
        },
        getcity({}, obj) {
            return request.post(`${url}/getcity`, obj);
        },
        crud({}, obj) {
            return request.post(`${url}/user/template/create`, obj);
        },
        getone({}, obj) {
            return request.post(`${url}/admin/crud/getone`, obj);
        },
        releaselist({}, obj) {
            return request.post(`${url}/wechat/authorize/push`, obj);
        },
        release({}, obj) {
            return request.post(`${url}/wechat/authorize/push`, obj);
        },
        getlist({}, obj) {
            return request.post(`${url}/user/app/getlist`, obj);
        },
        previewlist({}, obj) {
            return request.post(`${url}/user/app/getone`, obj);
        },
        getgroup({}, obj) {
            return request.post(`${url}/user/app/getgroup`, obj);
        },

        templatelist({}, obj) {
            return request.post(`${url}/user/template/getlist`, obj)
        },
        templatejson({}, obj) {
            return request.post(`${url}/user/template/getone`, obj)
        },
        getauth({}, obj) {
            return request.post(`${url}/user/template/getauth`, obj)
        }
    }
};
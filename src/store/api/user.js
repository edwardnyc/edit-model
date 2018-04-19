import Vue from 'vue';
import request from 'utils/request';
import config from '../config';
import axios from 'axios';
import qs from 'qs';
const url = config.proxy.apiHost;
const wx_url = config.proxy.wapiHost;
const baseurl = config.proxy.baseurl;
export default {
    actions: {
        login({}, obj) {
            return request.post(`${url}/part/login/user`, obj);
        },
        forget({}, obj) {
            return request.post(`${url}/part/login/forget`, obj);
        },
        register({}, obj) {
            return request.post(`${url}/part/login/register`, obj);
        },
        code({}, obj) {
            return request.post(`${url}/part/login/code`, obj);
        },
        feedback({}, obj) {
            return request.post(`${url}/user/app/create`, obj);
        },
        coupon({}, obj) {
            return request.post(`${url}/user/coupon/get_coupon`, obj);
        },
        savemodel({}, obj) {
            return request.post(`${url}user/template/create`, obj)
        },
        // getauth({}, obj) {
        //     return request.post(`${url}/user/template/getauth`, obj)
        // },
        geTone({}, obj) {
            return request.post(`${url}/user/template/getone`, obj)
        },
        getList({}, obj) {
            return request.post(`${url}/user/template/getlist`, obj)
        },
        step3({}, data) {
            return axios({
                method: 'post',
                url: `${url}/user/app/create`,
                baseURL: baseurl,
                data: data,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
        }
    }
};
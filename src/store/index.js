import Vue from 'vue';
import Vuex from 'vuex';
import User from './api/user';
import Edit from './api/edit';

function setCookie(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

    if (arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    } else {
        return null;
    }
}

Vue.use(Vuex);
const state = {
    _token: getCookie('_token'),
    open_id: getCookie('open_id'),
    app_id: getCookie('app_id'),
    group_id: getCookie('group_id'),
    root_id: getCookie('root_id'),
    qiniu: getCookie('qiniu'), //
    authorizer_access_token: getCookie('authorizer_access_token'),
    currentId: '',
    currentType: 0,
    currentLocation: {
        lng: '',
        lat: '',
    },
    qiniuToken: '',
    draglist: [], //list列表
    type: 0,
    shopLogo: null, //店铺头部带过来了
    app_name: null, //店铺名称
};
const getters = {
    draglist: state => state.draglist
};
const mutations = {
    app_id(state, n) {
        state.app_id = n
    },
    type(state, n) {
        state.type = n
    },
    _token(state, n) {
        state._token = n
    },
    group_id(state, n) {
        state.group_id = n
    },
    root_id(state, n) {
        state.root_id = n
    },
    qiniu(state, n) {
        state.qiniu = n
    },
    apply_id(state, n) {
        state.apply_id = n
    },
    authorizer_access_token(state, n) {
        state.authorizer_access_token = n
    },
    wechat_picurl(state, n) {
        state.wechat_picurl = n
    },
    currentImgUrl(state, n) {
        state.currentImgUrl = n
    },
    currentVideoUrl(state, n) {
        state.currentVideoUrl = n
    },
    writeCurrentInfo(state, n) {
        state.currentId = n.id;
        state.currentType = n.type;
    },
    writeLocation(state, n) {
        state.currentLocation = n;
    },
    writeQiniuToken(state, n) {
        state.qiniuToken = n;
    },
    updateData(state, val) {
        state.draglist = val;
    },
    shopLogo(state, val) {
        state.shopLogo = val;
    },
    app_name(state, val) {
        state.app_name = val;
    }
};

export default new Vuex.Store({
    state,
    getters,
    modules: {
        User,
        Edit
    },
    mutations,
});
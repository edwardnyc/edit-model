function setCookie(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
}

function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
        console.log(arr[2]);
        return arr[2];
    } else {
        return null;
    }
}

function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 60 * 60 * 1000);
    var cval = getCookie(name);
    if (cval != null) {
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";path=/";
    }
}

export default {
    methods: {
        setCookie(name, value) {
            setCookie.apply(this, [name, value]);
        },
        getCookie(name) {
            getCookie.apply(this, [name]);
        },
        delCookie(name) {
            delCookie.apply(this, [name]);
        }
    }
}
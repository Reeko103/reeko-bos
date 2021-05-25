//公共的js
import Vue from 'vue';

// 生成随机数
export function generateNum() {
    let code = '';
    //设置长度，这里看需求，我这里设置了4
    let codeLength = 6;
    //设置随机字符
    let random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
    //循环codeLength 我设置的4就是循环4次
    for (let i = 0; i < codeLength; i++) {
        //设置随机数范围,这设置为0 ~ 36
        let index = Math.floor(Math.random() * 9);
        //字符串拼接 将每次随机的字符 进行拼接
        code += random[index];
    }
    return code;
}

// 手机号校验
export function isPhoneNumber(phoneNum) {
    // let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    /*
      * 移动号码包括的号段：134/135/136/137,138,139；
    *                     147/148(物联卡号)；
    *                     150/151/152/157/158/159；
    *                     165（虚拟运营商）；
    *                     1703/1705/1706（虚拟运营商）、178；
    *                     182/183/184/187/188
    *                     198

    * 联通号段包括：130/131
    *               145
    *               155/156
    *               166/167(虚拟运营商)
    *               1704/1707/1708/1709、171
    *               186/186
    *
    * 电信号段包括： 133
    *                153
    *                162(虚拟运营商)
    *                1700/1701/1702(虚拟运营商)
    *                180/181/189
    *                191/199
    * */
    let reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/;
    return reg.test(phoneNum);
}

// 获取url携带的参数
export function getUrlParam(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let url = window.location.href.split('#')[0]
    let search = url.split('?')[1]
    if (search) {
        var r = search.substr(0).match(reg)
        if (r !== null) return unescape(r[2])
        return null
    } else {
        return null
    }
}


import qs from 'qs'
import request from '@/utils/request'

//* 开启灯光
export function wmjOpen(sn = 'WMJ19100076') {
   return request({
    url: `/wmj/open`,
    method: 'get',
    params: {
        sn  /// 设备序列号 WMJ19100076
    }
  })
}

//* 获取监控视频推流
export function monitorRtmp(unicode) {
   return request({
    url: `/monitor/rtmp`,
    method: 'get',
    params: {
      unicode  /// 设备唯一标识  V001 V002
    }
  })
}























/// 备份
//* get
export function getHomes(uniacid) {
   return request({
    url: `/db.json`,
    method: 'get',
    params: {
        uniacid
    }
  })
}

//* post
export function signup(joins) {
   return request({
    url: `/db.json`,
    method: 'post',
    data: {
      joins 
    }
  })
}

//* qs 
export function add(params) {
   return request({
      url: `/db.json`,
      method: 'post',
      data: qs.stringify(params)
  })
}
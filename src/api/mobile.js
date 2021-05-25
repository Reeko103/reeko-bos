import qs from 'qs'
import request from '@/utils/request'


//* 报警
export function warning(msg_type) {
   return request({
    url: `/common/receive`,
    method: 'get',
    params: {
        msg_type
    }
  })
}
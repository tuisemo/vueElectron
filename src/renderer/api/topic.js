import request from '../utils/request'

export function getTopics(data) {
  return request({
    url: 'https://cnodejs.org/api/v1/topics',
    method: 'get',
    params: data
  })
}

export function getTopicDetail(id = 0) {
  return request({
    url: `https://cnodejs.org/api/v1/topic/${id}`,
    method: 'get'
  })
}

import request from '../request/request'

//查询所有会员
export function getAllMember() {
  return request({
    url: '/allMember',
    method: 'get'
  })
}
//根据条件查询会员
export function getallMemberByParamr(params) {
    return request({
      url: '/allMemberByParam',
      method: 'post',
      data: JSON.stringify(params)
    })
  }

//根据id查询用户详情 
export function getMemberDetail(sellerId) {
    return request({
      url: '/getMemberDetail/'+sellerId,
      method: 'get'
    })
  }

  //查询标签
export function getMemberLabel() {
  return request({
    url: '/allLabel',
    method: 'get'
  })
}

  //添加标签
  export function addMemberLabel(labelContent) {
    return request({
      url: '/addLabel',
      method: 'get',
      params: {
        labelContent:labelContent
      }
    })
  }

    //删除标签
 export function deleteLabel(ids) {
      return request({
        url: '/deleteLabel',
        method: 'post',
        data: JSON.stringify(ids)
      })
    }
  
  


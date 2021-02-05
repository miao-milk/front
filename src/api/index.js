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

  //查询某用户的标签
  export function getMemberLabelBySellerId(sellerId) {
    return request({
      url: '/queryLabel/'+sellerId,
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

//树状图数据
 export function getTreeData() {
  return request({
    url: '/groupTree',
    method: 'get'
  })
}

//添加分组
export function addGroup(content,pid) {
  return request({
    url: '/addGroup',
    method: 'get',
    params: {
      content:content,
      pid:pid
    }
  })
}

//编辑分组
export function editGroup(content,id) {
  return request({
    url: '/editGroup',
    method: 'get',
    params: {
      content:content,
      id:id
    }
  })
}

//编辑分组
export function deleteGroup(id) {
  return request({
    url: '/deleteGroup',
    method: 'get',
    params: {
      id:id
    }
  })
}
  
  


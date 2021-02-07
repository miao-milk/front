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
    url: '/getMemberDetail/' + sellerId,
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

//根据条件查询标签
export function queryLable(params) {
  return request({
    url: '/allLabelByParam',
    method: 'post',
    data: JSON.stringify(params)
  })
}

//查询某用户的标签
export function getMemberLabelBySellerId(sellerId) {
  return request({
    url: '/queryLabel/' + sellerId,
    method: 'get'
  })
}

//添加客户标签
export function addMemberLabelByshopBuyerId(shopBuyerId, labelContent) {
  return request({
    url: '/addLabel/' + shopBuyerId,
    method: 'get',
    params: {
      labelContent: labelContent
    }
  })
}

//删除客户标签
export function deleteMemberLabelByshopBuyerId(shopBuyerId, labelContent) {
  return request({
    url: '/deleteLabel/' + shopBuyerId,
    method: 'get',
    params: {
      labelContent: labelContent
    }
  })
}

//添加标签库
export function addMemberLabel(labelContent) {
  return request({
    url: '/addLabel',
    method: 'get',
    params: {
      labelContent: labelContent
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
export function addGroup(content, pid) {
  return request({
    url: '/addGroup',
    method: 'get',
    params: {
      content: content,
      pid: pid
    }
  })
}


//编辑分组
export function editGroup(content, id) {
  return request({
    url: '/editGroup',
    method: 'get',
    params: {
      content: content,
      id: id
    }
  })
}

//删除分组
export function deleteGroup(id) {
  return request({
    url: '/deleteGroup',
    method: 'get',
    params: {
      id: id
    }
  })
}


//查询分组人群
export function getGroupMember(id) {
  return request({
    url: '/groupMember',
    method: 'get',
    params: {
      id: id
    }
  })
}

//查询分组信息
export function getGroupDetail(id) {
  return request({
    url: '/getGroupDetail',
    method: 'get',
    params: {
      id: id
    }
  })
}

//添加分组会员
export function addGroupMember(groupId, shopBuyerId) {
  return request({
    url: '/addGroupMember',
    method: 'get',
    params: {
      groupId: groupId,
      shopBuyerId: shopBuyerId
    }
  })
}


//查询会员消费等级
export function getMemberConsumptionLevel() {
  return request({
    url: '/MemberConsumptionLevel',
    method: 'get'
  })
}





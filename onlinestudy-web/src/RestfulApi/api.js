import Axios from 'axios'
Axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1'

// 课程分类
export const category = () =>{
    return Axios.get("/category").then(res=>res)
}

// 课程分类下对应的课程 categoryId为0时默认取全部课程
export const categoryTocourse = (categoryId,query) =>{
    return Axios.get(`/course?cid=${categoryId}&query=${query}`).then(res=>res)
}

// 筛选条件的课程
export const conditionCourse = (category_id,query_isup) =>{
    return Axios.get(`/course?cid=${category_id}&query=${query_isup}`).then(res=>res)
}

// 课程详情

export const courseDetail = (courseId) =>{
    return Axios.get(`/detail/${courseId}`).then(res=>res)
}


// 课程章节
export const chapter = (courseId) =>{
    return Axios.get(`/chapter/${courseId}`).then(res=>res)
}


// 课程评论
export const comment = (courseId) =>{
    return Axios.get(`/comment/${courseId}`).then(res=>res)
}

// 课程常见问题
export const commonquestion = (courseId) =>{
    return Axios.get(`/commonquestion/${courseId}`).then(res=>res)
}

// 登录
export const login = (params) =>{
    return Axios.post('/login',params).then(res=>res)
}

// 注册
export const register = (params) =>{
    return Axios.post('/register',params).then(res=>res)
}
// 购物车列表数据
export const shoppingList = () =>{
    return Axios.get(`/shopping`).then(res=>res)
}
// 加入购物车
export const shopping = (params) =>{
    return Axios.post(`/shopping`,params).then(res=>res)
}

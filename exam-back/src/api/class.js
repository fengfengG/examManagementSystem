/*
 * @Author: GF 
 * @Date: 2019-09-03 16:37:36 
 * @Last Modified by: GF
 * @Last Modified time: 2019-09-05 20:07:23
 */
import axios from 'axios'

export function classlist() {
    let token = window.sessionStorage.getItem('token')
    let uid = window.sessionStorage.getItem('uid')
    console.log(token, uid)
    return axios.get('/class/classManage', {
        headers: {
            authorization: token,
            uid: uid
        }
    })
}
export function addClass(params) {
    console.log(params, 'params')
    return axios.post('/class/addClass', params)
}
export function getCourse() {
    return axios.get('/class/getCourse')
}
export function getClassSize() {
    return axios.get('/class/getClassSize')
}
export function deleClass(cid) {
    return axios.post('/class/deleClass', { cid })
}

export function roomlist() {
    return axios.get('/class/roomlist')
}
export function addRoom(classSize) {
    return axios.post('/class/addRoom', classSize)
}
export function deleRoom(mid) {
    return axios.post('/class/deleRoom', { mid })
}


/*
 * @Author: GF 
 * @Date: 2019-09-04 11:41:40 
 * @Last Modified by: GF
 * @Last Modified time: 2019-09-05 20:12:49
 */
import axios from 'axios'

export function userLogin(params) {
    return axios.post('/user/login', params)
}
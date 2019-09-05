import axios from 'axios'

export function addUser(params) {
	return axios.post('/user/addUser', params)
}

export function getUserNameId() {
	return axios.get('/user/getUserNameId')
}

export function updateUser(params) {
	return axios.post('/user/updateUser', params)
}

export function getTypeList() {
	return axios.get('/user/getTypeList')
}

export function getApiAuthority() {
	return axios.get('/user/getApiAuthority')
}

export function getViewAuthority() {
	return axios.get('/user/getViewAuthority')
}

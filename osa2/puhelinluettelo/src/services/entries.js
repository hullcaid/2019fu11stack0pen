import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
	console.log('getting all entries')
	const request = axios.get(baseUrl)
	return request.then(response => response.data)
}

const create = newObject => {
	console.log('creating new entry')
	const request = axios.post(baseUrl, newObject)
	return request.then(response => response.data)
}

const remove = oldObject => {
	console.log('removing old entry')
	const request = axios.delete(baseUrl +'/'+ oldObject)
	return request.then(response => oldObject)
}

const modify = (oldObject, newData) => {
	console.log('Modifying old entry', oldObject, newData);
	const request = axios.put(`${baseUrl}/${oldObject}`, newData)
	return request.then(response => response.data)
}

export default {getAll, create, remove, modify}
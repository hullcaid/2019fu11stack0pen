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

export default {getAll, create, remove}
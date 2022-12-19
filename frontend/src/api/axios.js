import axios from 'axios'
import jwt_decode from 'jwt-decode'

const baseURL = 'http://localhost:5000'

export default axios.create({
	baseURL,
	headers: {
		'Content-type': 'application/json'
	},
})

const refreshToken = async () => {
	try {
		const response = await axios.post(`${baseURL}/api/auth/refresh`, null, {
			withCredentials: true
		})
		return response.data
	} catch (error) {
		console.log(error)
	}
}

// middleware for axios interceptors to refresh token if expired and update redux store with new token and user 
export const createAxiosInterceptors = (user, dispatch, stateSuccess) => {
	const newAxios = axios.create({ baseURL, withCredentials: true })
	newAxios.interceptors.request.use(
		async (config) => {
			let date = new Date()
			const decodedToken = await jwt_decode(user?.accessToken)
			if (decodedToken.exp < date.getTime() / 1000) {
				let data = await refreshToken()
				const refreshTokenUser = {
					...user,
					accessToken: data.accessToken
				}
				dispatch(stateSuccess(refreshTokenUser))
				config.headers['token'] = `Bearer ${data.accessToken}`
			}
			return config
		},
		(error) => {
			return Promise.reject(error)
		}
	)
	return newAxios
}

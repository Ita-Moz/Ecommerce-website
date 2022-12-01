import axios from './axios'
import {
	loginFailed,
	loginStart,
	loginSuccess,
	registerFailed,
	registerStart,
	registerSuccess
} from '../redux/authSlice'

export const requestLoginUser = async (user, dispatch, navigate) => {
	dispatch(loginStart())
	try {
		const response = await axios.post('/api/auth/login', user,{
			withCredentials: true
		})
		dispatch(loginSuccess(response.data))
		navigate('/')
	} catch (error) {
    dispatch(loginFailed())
	}
}
export const requestRegisterUser = async (user, dispatch, navigate) => {
  dispatch(registerStart())
	try {
    const response = await axios.post('/api/auth/register', user)
		dispatch(registerSuccess(response.data))
    alert('Login success')
		navigate('/login')
	} catch (error) {
		dispatch(registerFailed())
	}
}

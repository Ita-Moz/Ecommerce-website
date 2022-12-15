import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		login: {
			currentUser: null,
			isFetching: false,
			error: false
		},
		register: {
			isFetching: false,
			error: false,
			success: false
		}
	},
	reducers: {
		loginStart: (state) => {
			state.login.isFetching = true
		},
		loginSuccess: (state, action) => {
			state.login.isFetching = false
			state.login.currentUser = action.payload
			state.login.error = false
		},
		loginFailed: (state) => {
			state.login.isFetching = false
			state.login.error = true
		},
		registerStart: (state) => {
			state.register.isFetching = true
		},
		registerSuccess: (state) => {
			state.register.isFetching = false
			state.register.error = false
			state.register.success = true
		},
		registerFailed: (state) => {
			state.register.isFetching = false
			state.register.error = true
			state.register.success = false
		},
		logoutStart: (state) => {
			state.login.isFetching = true
		},
		logoutSuccess: (state) => {
			state.login.isFetching = false
			state.login.error = false
			state.login.currentUser = null
		},
		logoutFailed: (state) => {
			state.login.isFetching = false
			state.login.error = true
		}
	}
})
export const {
	loginStart,
	loginSuccess,
	loginFailed,
	registerStart,
	registerFailed,
	registerSuccess,
	logoutStart,
	logoutSuccess,
	logoutFailed
} = authSlice.actions
export default authSlice.reducer

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './authSlice.js'

const persistConfig = {
	key: 'root',
	version: 1,
	storage
}
const rootReducer = combineReducers({ auth: authReducer })
// Nếu không có persistReducer thì khi đăng nhập sẽ bị mất dữ liệu
//Dữ liệu muốn lưu trữ phải được đặt vào đối số thứ 2 của persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})
export const persistor = persistStore(store)

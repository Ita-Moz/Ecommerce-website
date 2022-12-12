import CircularProgress from '@mui/material/CircularProgress'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { requestLoginUser } from '../api/apiRequest'
import FormInput from '../components/FormInput'
function Login() {
	const [user, setUser] = useState({})
	const [isSubmit, setIsSubmit] = useState(false)
	const [formErrors, setFormErrors] = useState({})
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const errorLogin = useSelector((state) => state.auth.login.error)
	const isFetchingLogin = useSelector((state) => state.auth.login.isFetching)
	const handleOnChange = (e) => {
		const { name, value } = e.target
		setUser({ ...user, [name]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSubmit(true)
		setFormErrors(validate(user))
	}
	useEffect(() => {
		// If there is no error, then submit the form
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			requestLoginUser(user, dispatch, navigate)
		}
		return () => {
			setIsSubmit(false)
		}
	}, [formErrors])

	const validate = (values) => {
		const { password, username } = values
		const errors = {}
		if (!username) {
			errors.username = 'Tên người dùng không được để trống'
		}

		if (!password) {
			errors.password = 'Mật khẩu không được để trống'
		}
		return errors
	}
	return (
		<div className='centered my-10 mx-auto rounded-sm max-w-[600px] md:rounded-md'>
			<div className='bg-grayLight w-full p-2 sm:p-5 md:p-8'>
				<div className='centered flex-row my-3 gap-10 '>
					<h1 className='uppercase font-medium border-b-2 border-primary cursor-pointer'>
						Đăng nhập
					</h1>
					<Link
						to='/register'
						className='opacity-75 uppercase font-medium hover:text-primary'>
						Đăng ký
					</Link>
				</div>
				<hr />
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col gap-2 mt-5'>
						<FormInput
							className='py-2 px-3 rounded-sm'
							label={'Tên đăng nhập'}
							type='text'
							name='username'
							placeholder='Nhập tên đăng nhập'
							onChange={handleOnChange}
							errorMessage={formErrors?.username}
						/>
						<FormInput
							className='py-2 px-3 rounded-sm'
							label={'Mật khẩu'}
							type='password'
							name='password'
							placeholder='Nhập mật khẩu'
							onChange={handleOnChange}
							errorMessage={formErrors?.password}
						/>
						<div className='flex justify-end'>
							<a
								href='/forgot'
								className='text-sm text-primary hover:text-black hover:underline'>
								Quên mật khẩu?
							</a>
						</div>
						{errorLogin && (
							<div className='text-red text-center'>
								Tên đăng nhập hoặc mật khẩu không đúng!
							</div>
						)}
						<button
							type='submit'
							className='inline-block text-white bg-primary mx-auto w-fit px-5 py-2 rounded-sm md:px-8 hover:bg-green-600 transition-all'>
							{isFetchingLogin ? (
								<CircularProgress size={20} color='inherit' />
							) : (
								'Đăng nhập'
							)}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
export default Login

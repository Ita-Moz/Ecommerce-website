import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { requestRegisterUser } from '../api/apiRequest'
import FormInput from '../components/FormInput'

function Register() {
	const [user, setUser] = useState({})
	const [isSubmit, setIsSubmit] = useState(false)
	const [formErrors, setFormErrors] = useState({})
	const dispatch = useDispatch()
	const navigate = useNavigate()

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
		// If there is no error, submit the form
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			requestRegisterUser(user,dispatch,navigate)
		}
		return() => {
			setIsSubmit(false)
		}
	}, [formErrors])
	const validate = (values) => {
		const { email, password, username, confirmPassword } = values
		// eslint-disable-next-line no-useless-escape
		const regexUserName = /^[a-zA-Z0-9_-]{3,16}$/
		const regexPassword =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
		const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
		const errors = {}
		if (!username) {
			errors.username = 'Tên người dùng không được để trống'
		} else if (!regexUserName.test(values.username)) {
			errors.username =
				'Tên người dùng từ 3 đến 16 ký tự và không chứa ký tự đặc biệt'
		}

		if (!password) {
			errors.password = 'Mật khẩu không được để trống'
		} else if (!regexPassword.test(values.password)) {
			errors.password =
				'Mật khẩu tối thiểu 8 ký tự, ít nhất một chữ cái thường, hoa và một số'
		}

		if (!confirmPassword) {
			errors.confirmPassword = 'Mật khẩu không được để trống'
		} else if (values.password !== values.confirmPassword) {
			errors.confirmPassword = 'Mật khẩu không đúng!'
		}

		if (!email) {
			errors.email = 'Email không được để trống'
		} else if (!regexEmail.test(values.email)) {
			errors.email = 'Định dạng email không hợp lệ!'
		}

		return errors
	}
	return (
		<div className='centered my-10 mx-auto rounded-sm max-w-[600px] md:rounded-md'>
			<div className='bg-grayLight w-full p-2 sm:p-5 md:p-8'>
				<div className='centered flex-row my-3 gap-10 '>
					<Link
						to='/login'
						className='opacity-75 uppercase font-medium hover:text-primary'>
						Đăng nhập
					</Link>
					<h1 className='uppercase font-medium border-b-2 border-primary cursor-pointer'>
						Đăng ký
					</h1>
				</div>
				<hr />
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col gap-2 mt-5'>
						<FormInput
							label={'Tên đăng nhập'}
							type='text'
							name='username'
							placeholder='Nhập tên đăng nhập'
							className='py-2 px-3 rounded-sm'
							onChange={handleOnChange}
							errorMessage={formErrors?.username}
						/>
						<FormInput
							label={'Mật khẩu'}
							type='password'
							name='password'
							placeholder='Nhập mật khẩu'
							className='py-2 px-3 rounded-sm'
							onChange={handleOnChange}
							errorMessage={formErrors?.password}
						/>
						<FormInput
							label={'Nhập lại mật khẩu'}
							type='password'
							name='confirmPassword'
							placeholder='Nhập lại mật khẩu'
							className='py-2 px-3 rounded-sm'
							onChange={handleOnChange}
							errorMessage={formErrors?.confirmPassword}
						/>
						<FormInput
							label={'Email'}
							type='email'
							name='email'
							placeholder='Nhập email'
							className='py-2 px-3 rounded-sm'
							onChange={handleOnChange}
							errorMessage={formErrors.email}
						/>

						<div className='flex justify-end'>
							<a
								href='/forgot'
								className='text-sm text-primary hover:text-black hover:underline'>
								Quên mật khẩu?
							</a>
						</div>
						<button
							type='submit'
							className='inline-block text-white bg-primary mx-auto w-fit px-5 py-2 rounded-sm md:px-8 hover:bg-green-600 transition-all'>
							Tạo tài khoản
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Register

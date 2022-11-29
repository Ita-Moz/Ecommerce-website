import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput'
function Login() {
	const [values, setValues] = useState({})
	const [isSubmit, setIsSubmit] = useState(false)
	const [formErrors, setFormErrors] = useState({})
	const handleOnChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		setIsSubmit(true)
		setFormErrors(validate(values))
	}
	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && isSubmit) {
			console.log('submit')
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
						<button
							type='submit'
							className='inline-block text-white bg-primary mx-auto w-fit px-5 py-2 rounded-sm md:px-8 hover:bg-green-600 transition-all'>
							Đăng nhập
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Login

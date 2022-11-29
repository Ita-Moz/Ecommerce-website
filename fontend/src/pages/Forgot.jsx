import { Link } from 'react-router-dom'
import FormInput from '../components/FormInput'
import { useState } from 'react'
function Forgot() {
	const [values, setValues] = useState({})
	const handleOnChange = (e) => {
		const { name, value } = e.target
		setValues({ ...values, [name]: value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(values)
	}
	return (
		<div className='centered my-10 mx-auto rounded-sm max-w-[600px] md:rounded-md'>
			<div className='bg-grayLight w-full p-2 sm:p-5 md:p-8'>
				<div className='centered flex-row my-3 gap-10 '>
					<Link
						to='/login'
						className='uppercase font-medium hover:text-primary'>
						Đăng nhập
					</Link>
					<Link
						to='/register'
						className='uppercase font-medium hover:text-primary cursor-pointer'>
						Đăng ký
					</Link>
				</div>
				<hr />
				<h2 className='mt-5 text-center'>
					Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua email.
				</h2>
				<form onSubmit={handleSubmit}>
					<div className='flex flex-col gap-2'>
						<FormInput
							className='py-2 px-3 rounded-sm'
							label={'Email'}
							type='email'
							name='email'
							placeholder='Nhập email'
							required
							onChange={handleOnChange}
						/>
						<button
							type='submit'
							className='inline-block text-white bg-primary mt-5 px-5 py-2 rounded-sm md:px-8 hover:bg-green-600 transition-all'>
							Lây lại mật khẩu
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Forgot

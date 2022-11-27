/* eslint-disable jsx-a11y/anchor-is-valid */
import { footerMobile } from '../config/images'
function FooterMobile() {
	return (
		<div className='lg:hidden z-50 fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white'>
			<div className='flex justify-evenly items-center'>
				<a href='#' className='text-center cursor-pointer'>
					<img className='w-7 py-2 mx-auto' src={footerMobile.menu} alt='logo menu' />
					Menu
				</a>
				<a href='#' className='relative text-center cursor-pointer'>
					<img className='w-7 py-2 mx-auto' src={footerMobile.cart} alt='logo cart' />
					Giỏ hàng
					<span className='absolute -right-2 top-1 bg-primary rounded-full w-6 h-6 flex justify-center items-center'>2</span>
				</a>
				<a href='#' className='relative text-center cursor-pointer'>
					<img className='w-7 py-2 mx-auto' src={footerMobile.love} alt='logo love' />
					Yêu thích
					<span className='absolute -right-2 top-1 bg-primary rounded-full w-6 h-6 flex justify-center items-center'>2</span>
				</a>
				<a href='#' className='text-center cursor-pointer'>
					<img className='w-7 py-2 mx-auto' src={footerMobile.account} alt='logo account' />
					Tài khoản
				</a>
			</div>
		</div>
	)
}

export default FooterMobile

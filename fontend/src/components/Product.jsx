/* eslint-disable jsx-a11y/anchor-is-valid */
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import fireIcon from '../assets/images/fire_icon.svg'
function Product({ img, category, title, price, sale, amount, isFlex = false }) {
	return (
		<div className={`bg-white p-2 lg:p-5 rounded-2xl ${isFlex ? 'flex' : ''}`}>
			<div>
				<div className='w-full flex justify-center'>
					<img className={`rounded-md ${isFlex ? 'w-[150px]' : ''}`} src={img} alt='images' />
				</div>
				<p className='text-[12px] text-[#90908E]'>{category}</p>
			</div>
			<div className={`${isFlex ? 'ml-5' : ''}`}>
				<div>
					<a href='#' className={`text-[13px] font-medium lg:text-[15px] ${isFlex ? 'break-keep' : ''}`}>
						{title}
					</a>
				</div>
				<div className='flex justify-between items-center py-2'>
					<div>
						<p className='text-primary font-medium'>{price}đ</p>
						<p className='text-[13px] text-red font-medium'>{sale ? sale : ''}</p>
					</div>
					{!isFlex && (
						<button className='hidden sm:flex rounded-md w-10 h-10 bg-[#cce7d0] centered group hover:bg-primary'>
							<LocalMallOutlinedIcon className='text-[#3bb77e] group-hover:text-white' />
						</button>
					)}
				</div>
				{amount && (
					<div className='bg-[#ffaaaf] z-10 relative w-full rounded-full'>
						<span className='relative inline-block top-0 left-1/2 transform -translate-x-1/2 z-20 text-white text-[11px] lg:text-[13px]'>
							Đã bán {amount}
						</span>

						<img className={`absolute -top-1 left-0 z-30`} src={fireIcon} width={22} alt='fire icon' />

						<div className={`bg-red rounded-full absolute top-0 left-0 h-full w-1/2 text-center text-white`}></div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Product

/* eslint-disable jsx-a11y/anchor-is-valid */
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import { useSelector } from 'react-redux'
import { Stack, Tooltip, tooltipClasses } from '@mui/material'
import Badge from '@mui/material/Badge'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.webp'
import Cart from './Cart'
import Search from './Search'

// styled component for tooltip MUI
const LightTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(() => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: 'white',
		color: 'rgba(0, 0, 0, 0.87)',
		minWidth: 100,
		boxShadow:
			'0px 0px 0px 1px rgba(0, 0, 0, 0.05), 0px 4px 8px rgba(0, 0, 0, 0.1)',
		padding: '8px 16px'
	}
}))
function Header() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const user = useSelector((state) => state.auth.login.currentUser)
	const handleOpenCart = () => {
		setIsDrawerOpen(true)
	}
	return (
		<div>
			{/* Top header */}
			<div className='hidden md:flex justify-between items-center font-light py-3 border-b border-gray-300'>
				<div className='centered'>
					<a href='#'>Tìm cửa hàng</a>
					<span className='mx-3'>|</span>
					<a href='#'>Hỗ trợ mua hàng</a>
				</div>
				<div className='centered'>
					<a href='#'>Sản phẩm đã xem</a>
					<span className='mx-3'>|</span>
					<a href='#'>Yêu thích</a>
				</div>
			</div>

			{/* Main header */}
			<header className='flex items-center justify-between py-5 '>
				<div className='w-[25%]'>
					<Link to={'/'}>
						<img src={logo} alt='logo' className='max-h-[45px] max-w-[190px]' />
					</Link>
				</div>
				<Search className={'hidden lg:flex w-[35%]'}></Search>
				<div className='flex items-center gap-3 w-[40%] justify-end '>
					<div className='flex items-center gap-1'>
						<LocalPhoneOutlinedIcon
							sx={{ fontSize: '28px', cursor: 'pointer' }}
						/>
						<div className='text-[13px] md:text-[15px]'>
							<p>Hotline</p>
							<strong>1900 0000</strong>
						</div>
					</div>
					<div className='hidden lg:flex justify-center items-center gap-2'>
						<LightTooltip
							title={
								user?.username ? (
									<Stack direction='column' spacing={2}>
										<a
											href={`/profile`}
											className='bg-primary centered text-white rounded-sm w-[200px] h-[40px] text-[16px] font-normal'>
											Tài khoản
										</a>
										<a
											href='/login'
											className='bg-primary centered text-white rounded-sm w-[200px] h-[40px] text-[16px] font-normal'>
											Đăng xuất
										</a>
									</Stack>
								) : (
									<Stack direction='column' spacing={2}>
										<a
											href='/login'
											className='bg-primary centered text-white rounded-sm w-[200px] h-[40px] text-[16px] font-normal'>
											Đăng nhập
										</a>
										<a
											href='/registry'
											className='bg-primary centered text-white rounded-sm w-[200px] h-[40px] text-[16px] font-normal'>
											Đăng ký
										</a>
									</Stack>
								)
							}>
							<div>
								<AccountCircleOutlinedIcon
									sx={{ fontSize: '28px', cursor: 'pointer' }}
								/>
								<strong className='cursor-pointer'>{user?.username?`Hi, ${user?.username}`:'Tài khoản'}</strong>
							</div>
						</LightTooltip>
					</div>
					<div className='centered gap-2' onClick={handleOpenCart}>
						<Badge badgeContent={5} color='warning'>
							<LocalMallOutlinedIcon
								sx={{ fontSize: '28px', cursor: 'pointer' }}
							/>
						</Badge>
						<strong className='hidden lg:inline-block'>Giỏ hàng</strong>
					</div>
				</div>
			</header>

			{/* Search mobile */}
			<Search className={'flex lg:hidden'} />
			<NavBar />

			{/* Show Cart when click icon cart in header main */}
			<Cart isOpen={isDrawerOpen} handleClose={setIsDrawerOpen} />
		</div>
	)
}

function NavBar() {
	const categoryProduct = <div>navmenu</div>
	const categoryNews = (
		<div className='flex'>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
				reprehenderit esse delectus earum ex voluptates quis rerum minima non
				rem illo fuga, modi corrupti cum iusto numquam dolorem, a quidem.
			</div>
		</div>
	)
	return (
		<div className='hidden lg:flex items-center py-3 border-b-[1px] border-gray-300'>
			<div className='flex gap-5 font-medium'>
				<Link to={'/'}>Trang chủ</Link>
				<LightTooltip title={categoryProduct}>
					<Link to={'/'}>Sản phẩm</Link>
				</LightTooltip>
				<LightTooltip title={categoryNews}>
					<Link to={'/'}>Tin tức</Link>
				</LightTooltip>
				<Link to={'/'}>Giới thiệu</Link>
				<Link to={'/'}>Liên hệ</Link>
			</div>
		</div>
	)
}
export default Header

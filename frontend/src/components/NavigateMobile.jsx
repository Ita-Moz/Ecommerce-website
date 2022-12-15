/* eslint-disable jsx-a11y/anchor-is-valid */
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import { BottomNavigation, BottomNavigationAction, styled } from '@mui/material'
import { useState } from 'react'
function NavigateMobile() {
	const [value, setValue] = useState(0)
	const MyBottomNavigationAction = styled(BottomNavigationAction)({
		'&.Mui-selected': {
			color: '#3bb77e'
		}
	})
	return (
		<div className='lg:hidden z-50 fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white'>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue)
				}}>
				<MyBottomNavigationAction href={'/ew'}
					label='Menu'
					icon={<MenuOutlinedIcon fontSize='medium' />}
				/>
				<MyBottomNavigationAction
					label='Giỏ hàng'
					icon={<LocalMallOutlinedIcon fontSize='medium' />}
				/>
				<MyBottomNavigationAction
					label='Yêu thích'
					icon={<FavoriteBorderOutlinedIcon fontSize='medium' />}
				/>
				<MyBottomNavigationAction
					color='success'
					label='Tài khoản'
					icon={<AccountCircleOutlinedIcon fontSize='medium' />}
				/>
			</BottomNavigation>
		</div>
	)
}

export default NavigateMobile

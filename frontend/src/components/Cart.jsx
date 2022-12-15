import Drawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'

function Cart({ isOpen, handleClose }) {
	return (
		<div>
			<Drawer anchor='right' open={isOpen} onClose={() => handleClose(false)}>
				<Box p={2} className='w-[300px] sm:w-[350px] xl:w-[450px]'>
					Cart
				</Box>
			</Drawer>
		</div>
	)
}

export default Cart

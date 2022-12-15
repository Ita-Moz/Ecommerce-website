import { useState } from 'react'

function Countdown({ time }) {
	const [timerDays, setTimerDays] = useState('00')
	const [timerHours, setTimerHours] = useState('00')
	const [timerMinutes, setTimerMinutes] = useState('00')
	const [timerSeconds, setTimerSeconds] = useState('00')
	let interval
	const startTimer = () => {
		const countDownDate = new Date(time).getTime()
		interval = setInterval(() => {
			const now = new Date().getTime()
			const distance = countDownDate - now
			const days = Math.floor(distance / (1000 * 60 * 60 * 24))
			const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
			const seconds = Math.floor((distance % (1000 * 60)) / 1000)
			if (distance < 0) {
				clearInterval(interval.current)
			} else {
				setTimerDays(days)
				setTimerHours(hours)
				setTimerMinutes(minutes)
				setTimerSeconds(seconds)
			}
		})
	}
	startTimer()
	return (
		<div className='flex gap-2 text-black'>
			<div className='centered bg-yellow rounded-lg px-4 py-2 flex-col'>
				<p>Ngày</p>
				<p className='text-[18px] font-bold'>{timerDays}</p>
			</div>
			<div className='centered bg-yellow rounded-lg px-4 py-2 flex-col'>
				<p>Giờ</p>
				<p className='text-[18px] font-bold'>{timerHours}</p>
			</div>
			<div className='centered bg-yellow rounded-lg px-4 py-2 flex-col'>
				<p>Phút</p>
				<p className='text-[18px] font-bold'>{timerMinutes}</p>
			</div>
			<div className='centered bg-yellow rounded-lg px-4 py-2 flex-col'>
				<p>Giây</p>
				<p className='text-[18px] font-bold'>{timerSeconds}</p>
			</div>
		</div>
	)
}

export default Countdown

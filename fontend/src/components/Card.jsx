function Card({ img }) {
	return (
		<div className='hover:border-primary cursor-pointer border border-gray-300 centered rounded-md lg:rounded-xl overflow-hidden'>
			<img className='w-full bg-cover bg-center' src={img} alt='images' />
		</div>
	)
}

export default Card

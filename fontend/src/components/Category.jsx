/* eslint-disable jsx-a11y/anchor-is-valid */
function Category({ bg, title, arraySub }) {
	return (
		<div className={`relative w-full p-5 overflow-hidden rounded-3xl md:min-h-[250px] lg:min-h-[330px]`}>
			<img className='absolute inset-0 w-full bg-cover bg-center h-full ' src={bg} alt='bg images' />
			<div className='relative font-medium text-lg mb-5 '>{title}</div>
			<ul>
				{arraySub.map((sub, index) => (
					<a href='#' key={index}>
						<li
							className={
								'relative ml-3 text-[#3e4a5e] text-[14px] py-1 before:absolute before:top-1/2 before:-left-3 before:-translate-y-1/2 before:w-[7px] before:h-[7px] before:bg-gray-900 before:rounded-full hover:text-primary'
							}>
							{sub}
						</li>
					</a>
				))}
			</ul>
			<button className='relative bg-primary rounded-full mt-4 px-5 py-1 text-white font-medium'>
				<a href='#'>Mua sắm ngay</a>
			</button>
		</div>
	)
}

export default Category

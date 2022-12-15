import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
function Carousel({ images, preview, space, breakpoints }) {
	return (
		<Swiper
			breakpoints={breakpoints}
			spaceBetween={space}
			slidesPerView={preview}
			pagination={true}
			modules={[Pagination]}
			className='mySwiper'>
			{images.map((image, index) => {
				return (
					<SwiperSlide key={index}>
						<a href='#'>
							<img src={image} alt='images slide' />
						</a>
					</SwiperSlide>
				)
			})}
		</Swiper>
	)
}

export default Carousel

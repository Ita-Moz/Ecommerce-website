import { useState } from 'react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import brandImage from '../assets/images/brand/wolf_brand_image.webp'
import bannerSmall from '../assets/images/wolf_banner_small.webp'
import bannerMeat from '../assets/images/wolf_module_product_banner.webp'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import Countdown from '../components/Countdown'
import Product from '../components/Product'
import Tag from '../components/Tag'
import { bannerMilk, bgCategory, brand, products, slider } from '../config/images'
import { dataFoodFish, dataProductFish } from '../data/data'

function Home() {
	const arrayCategory = ['Rau xanh, Rau tươi', 'Củ, quả, măng tươi', 'Hành, tỏi, ớt, rau thơm', 'Nấm các loại', 'Combo rau củ quả']
	const arraySlider = Object.values(slider)
	const arrayImgProduct = Object.values(products)
	const arrayBgCategory = Object.values(bgCategory)
	const arrayBrand = Object.values(brand)

	const [selected, setSelected] = useState(0)
	const [productsSelected, setProductSelected] = useState(dataProductFish[0])

	return (
		<div className='w-full'>
			<div className='mt-5 overflow-hidden rounded-lg'>
				<Carousel images={arraySlider} />
			</div>

			{/* Category */}
			<section className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 xl:gap-7'>
				{arrayBgCategory.map((item, index) => (
					<Category key={index} bg={item} title={'Rau, củ, trái cây'} arraySub={arrayCategory} />
				))}
			</section>

			<section id='sales' className='bg-red p-5 rounded-lg mt-10'>
				<div className='text-white md:flex md:justify-between md:items-center'>
					<div className='text-center md:text-left'>
						<div className=' text-[22px] font-medium'>Săn Sale đón lễ</div>
						<p className='text-[15px]'>Hàng ngàn sản phẩm giảm giá diễn ra từ ngày 30/4 đến 30/6</p>
					</div>
					<div>
						<p className='text-[15px] font-medium md:hidden'>Kết thúc sau:</p>
						<Countdown time={'1/22/2023'} />
					</div>
				</div>

				{/* Slider */}
				<div className='mt-5'>
					<Swiper
						slidesPerView={2}
						spaceBetween={10}
						autoplay={{ delay: 3000, disableOnInteraction: false }}
						breakpoints={{
							768: {
								slidesPerView: 3,
								spaceBetween: 20
							},
							1024: {
								slidesPerView: 5,
								spaceBetween: 10
							}
						}}
						className='mySwiper'
						modules={[Autoplay]}>
						{arrayImgProduct.map((image, index) => {
							return (
								<SwiperSlide key={index}>
									<div className='w-full'>
										<Product
											img={image}
											category={'Sản phẩm'}
											title={'Hộp 30 trứng cút tươi V.Farm'}
											price={'26.000'}
											sale={'Giảm 10%'}
											amount={45}
										/>
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</div>
			</section>

			{/* Brand */}
			<section id='brand' className='mt-10'>
				<h1 className='text-[22px] font-medium'>Thương hiệu nổi bật</h1>
				<div className='mt-3 sm:flex sm:gap-5'>
					<img src={brandImage} className={'mx-auto sm:max-w-[40%]'} alt='brand' />
					<div className='grid grid-cols-3 gap-2 lg:gap-4 my-4'>
						{arrayBrand.map((item, index) => {
							return <Card key={index} img={item} />
						})}
					</div>
				</div>
			</section>
			
			{/* Products list */}
			<section className='mt-10 bg-gray-50 py-3 px-2 rounded-md lg:px-10'>
				<div className='lg:flex lg:justify-between lg:items-center'>
					<h1 className='text-[22px] font-medium'>Thịt, cá, Trứng rau</h1>
					<ul className='mt-5 flex flex-shrink-0 gap-5 overflow-x-scroll pb-3 lg:overflow-x-hidden'>
						{dataFoodFish.map((item, index) => (
							<li className=' min-w-fit' key={index}>
								<Tag
									key={index}
									onClick={() => {
										setSelected(index)
										setProductSelected(dataProductFish[index])
									}}
									className={`px-3 py-2 rounded-md text-sm transition-all ${
										selected === index ? 'bg-primary text-white' : 'bg-gray-200 text-black'
									} `}>
									{item}
								</Tag>
							</li>
						))}
					</ul>
				</div>
				<div>
					<div className='grid grid-cols-2 gap-4 mt-5 sm:grid-cols-3 lg:grid-cols-5'>
						<div>
							<img src={bannerMeat} alt='image' className='rounded-md' />
						</div>
						{productsSelected.map((item, index) => {
							return (
								<Product
									key={index}
									img={item.img}
									category={item.category}
									title={item.title}
									price={item.price}
									sale={item.sale}
									amount={item.quantity}
								/>
							)
						})}
					</div>
				</div>
			</section>
			{/*  */}
			<section className='py-5 lg:py-10'>
				<div>
					<Carousel
						images={[bannerMilk.banner1, bannerMilk.banner2]}
						preview={1}
						space={10}
						breakpoints={{
							640: {
								slidesPerView: 2
							}
						}}
					/>
				</div>
				<h1 className='inline-block text-[22px] font-medium mt-5 pb-2 border-b-2 border-primary'>Sữa tươi các loại</h1>
				<div className='border-t-2 lg:flex pt-5'>
					<div className='hidden lg:flex'>
						<img src={bannerSmall} className={'max-w-[280px] max-h-[345px]'} alt='banner' />
					</div>
					<div className='grid grid-cols-2 sm:grid-cols-3'>
						{arrayImgProduct.map((item, index) => {
							return <Product key={index} img={item} title={`Thùng bia 24 lon bia Việt${index}`} price={'20.000'} isFlex={false} />
						})}
					</div>
				</div>
			</section>
			<section>
				<h1 className='text-[22px] font-medium'>Món ngon mỗi ngày</h1>
				<div className='sm:grid sm:grid-cols-2 sm:gap-5'>
					<div className='flex gap-5 mt-2 sm:flex-col lg:flex-row'>
						<div className='w-[40%] sm:w-full'>
							<img src={products.daucahoi} alt='images' />
						</div>
						<div className='w-[60%] sm:w-full'>
							<a href='#' className='text-[15px] font-medium hover:text-primary transition-all'>
								Gần 100 loại bánh dân gian hội tụ ở miền tây
							</a>
							<p className='text-gray-500 text-[13px] italic'>Thứ tư, 13/04/2022</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi accusamus minima numquam, fugiat rem molestias totam sunt
								debitis eaque, aspernatur, necessitatibus tempore suscipit facilis unde omnis mollitia ea at!
							</p>
						</div>
					</div>
					<div className='flex gap-5 mt-2 sm:flex-col lg:flex-row'>
						<div className='w-[40%] sm:w-full'>
							<img src={products.daucahoi} alt='images' />
						</div>
						<div className='w-[60%] sm:w-full'>
							<a href='#' className='text-[15px] font-medium hover:text-primary transition-all'>
								Gần 100 loại bánh dân gian hội tụ ở miền tây
							</a>
							<p className='text-gray-500 text-[13px] italic'>Thứ tư, 13/04/2022</p>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis modi accusamus minima numquam, fugiat rem molestias totam sunt
								debitis eaque, aspernatur, necessitatibus tempore suscipit facilis unde omnis mollitia ea at!
							</p>
						</div>
					</div>
				</div>
				<div className='text-center mt-5 lg:mt-20'>
					<Tag
						className={`transition-all bg-[#CCE7D0] font-medium text-[13px] px-5 py-3 lg:py-5 rounded-md hover:bg-primary hover:text-white`}
						href={'#'}>
						Xem tất cả tin Món ngon mỗi ngày
					</Tag>
				</div>
			</section>
		</div>
	)
}

export default Home

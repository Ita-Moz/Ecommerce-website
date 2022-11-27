import { footer as footer1 } from "../config/images"
import { dataFooterCategory, dataFooterFood, dataFooterPolicy } from "../data/data"
function footer() {
	return (
		<div className="pb-[68px] lg:pb-0 mt-10 bg-[#252B33] text-white">
			<div className="flex overflow-x-scroll py-5 px-2 gap-5 lg:overflow-x-hidden lg:justify-evenly lg:items-center lg:border-b-2 lg:border-gray-500/75 md:mx-14 ">
				{dataFooterPolicy.map((item, index) => (
					<div className="flex gap-5 justify-center items-center min-w-fit" key={index}>
						<div>
							<img src={item.img} width={35} alt="images" />
						</div>
						<span className="text-sm">{item.text}</span>
					</div>
				))}
			</div>
			<div className="md:mx-14 lg:flex lg:justify-evenly">
				<div>
					<img
						src={footer1.footerLogo}
						className={"max-h-[45px] mx-auto mt-5"}
						alt="image"
					/>
					<div>
						<div className="centered gap-5 mt-5">
							<img src={footer1.footerAddress} width={30} alt="image" />
							<p className="text-sm ">
								Số 70 Lữ Gia - Phường 15 - Quận 11 - TP Hồ Chí Minh
							</p>
						</div>
						<div className="text-gray-500 text-sm px-2 centered gap-5 ">
							<span>Thứ 2 - Thứ 6: 8:00-17:00</span>
							<br />
							<span>Thứ 7: 8:00 – 12:00</span>
						</div>
					</div>
				</div>
				<div className="mt-5 mx-2 border-b border-gray-500 lg:border-0 ">
					<h1 className="text-[17px]">Hỗ trợ khách hàng</h1>
					<div className="flex items-center mt-5  gap-5">
						<img src={footer1.footerPhone} width={25} alt="image" />
						<div>
							<p className="font-medium tracking-wide">1900 6750</p>
							<p className="text-gray-500 text-[14px]">Thứ 2 - Thứ 7: 8:00 - 21:30</p>
						</div>
					</div>
				</div>
				<div className="sm:flex sm:justify-around lg:items-start sm:mt-5">
					<div className="px-2 mb-5">
						<h1 className="text-[17px] mb-1 ">Danh mục</h1>
						<div className="flex flex-col">
							{dataFooterCategory.map((item, index) => (
								<a
									href="#"
									className="block text-[14px] font-light hover:text-primary transition-all"
									key={index}
								>
									{item}
								</a>
							))}
						</div>
					</div>
					<div className="px-2 mb-5">
						<h1 className="text-[17px] mb-1 ">Mục ẩm thực</h1>
						<div className="flex flex-col">
							{dataFooterFood.map((item, index) => (
								<a
									href="#"
									className="block text-[14px] font-light hover:text-primary transition-all"
									key={index}
								>
									{item}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default footer

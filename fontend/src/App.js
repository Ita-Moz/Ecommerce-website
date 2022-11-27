import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import FooterMobile from './components/FooterMobile'
import Header from './components/Header'
import config from './config/routes'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Search from './pages/Search'

export default function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<div className='px-5 md:px-10 xl:px-20 2xl:px-32'>
					<Header />
					<Routes>
						<Route path={config.home} element={<Home />} />
						<Route path={config.search} element={<Search />} />
						<Route path={config.product} element={<Product />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
					<FooterMobile />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	)
}
// Home
// Trang tìm kiếm
// Trang danh sách sản phẩm
// Trang checkout
// Trang thanh toán
// Trang đăng nhập
// Trang đăng ký
// Trang quên mật khẩu
// Trang giỏ hàng

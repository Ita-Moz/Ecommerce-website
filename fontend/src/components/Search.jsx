import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { useEffect, useRef, useState } from 'react'
import SuggestSearch from './SuggestSearch'

function Search({ className }) {
	const [showSuggest, setShowSuggest] = useState(false)
	const inputRef = useRef()
	useEffect(() => {
		document.addEventListener('click', (e) => {
			if (!inputRef.current.contains(e.target)) {
				setShowSuggest(false)
			}
		})
	}, [])
	return (
		<div className={`relative ${className}`}>
			<div className={`relative w-full `}>
				<input
					autoComplete='off'
					className='w-full outline-none bg-grayLight px-5 py-2 rounded-md'
					type='text'
					placeholder='Bạn cần tìm gì?'
					ref={inputRef}
					onClick={() => setShowSuggest(true)}
				/>
				<button className='absolute top-1/2 right-7 -translate-y-1/2 text-2xl cursor-pointer'>
					<SearchOutlinedIcon />
				</button>
			</div>
			{showSuggest && <SuggestSearch />}
		</div>
	)
}

export default Search

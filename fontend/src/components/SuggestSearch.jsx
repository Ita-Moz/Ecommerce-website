import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined"
import Tag from "./Tag"
function SuggestSearch() {
	return (
		<div className="z-50 absolute px-3 top-10 left-0 w-full bg-white shadow-md min-h-[100px]">
			<div className="pt-2 border-b border-gray-300">
				<h1 className="uppercase font-medium flex items-center">
					<WhatshotOutlinedIcon color="red" />
					tìm kiếm phổ biến
				</h1>
			</div>
			<div className="flex flex-wrap my-2 gap-2">
				<Tag
					className={`inline-block bg-slate-100 rounded-sm px-2 py-1 font-light text-[14px]`}
				>
					Trái cây
				</Tag>
				<Tag
					className={`inline-block bg-slate-100 rounded-sm px-2 py-1 font-light text-[14px]`}
				>
					Sữa tươi
				</Tag>
				<Tag
					className={`inline-block bg-slate-100 rounded-sm px-2 py-1 font-light text-[14px]`}
				>
					Sữa chua
				</Tag>
				<Tag
					className={`inline-block bg-slate-100 rounded-sm px-2 py-1 font-light text-[14px]`}
				>
					Thịt xông khói
				</Tag>
				<Tag
					className={`inline-block bg-slate-100 rounded-sm px-2 py-1 font-light text-[14px]`}
				>
					Mì ăn liền
				</Tag>
				<Tag
					className={`inline-block bg-slate-100 rounded-sm px-2 py-1 font-light text-[14px]`}
				>
					Nước ngọt
				</Tag>
			</div>
			<div className="text-center font-medium text-[15px] tracking-wide py-2">
				Không tìm thấy kết quả
			</div>
		</div>
	)
}

export default SuggestSearch

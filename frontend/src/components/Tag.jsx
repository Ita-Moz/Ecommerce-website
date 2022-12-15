import { Link } from "react-router-dom"

function Tag({ children, className, to, href, onClick, ...passProps }) {
	let Comp = "button"
	const props = { onClick, ...passProps }
	if (to) {
		Comp = Link
		props.to = to
	} else if (href) {
		Comp = "a"
		props.href = href
	}
	return (
		<div>
			<Comp className={` ${className} `} {...props}>
				{children}
			</Comp>
		</div>
	)
}

export default Tag

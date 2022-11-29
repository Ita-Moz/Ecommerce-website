function FormInput(props) {
	const {
		label,
		type,
		name,
		placeholder,
		className,
		errorMessage,
		star,
		onChange,
		...otherProps
	} = props
	return (
		<div className='flex flex-col gap-2 mt-2'>
			<label htmlFor={name}>
				{label} {star && <span style={{ color: 'red' }}>*</span>}
			</label>
			<input
				{...otherProps}
				type={type}
				name={name}
				className={`outline-none border-none ${className}`}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<span style={{ color: 'red'}}>{errorMessage}</span>
		</div>
	)
}

export default FormInput

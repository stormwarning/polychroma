interface Props {
	value: number
	min: number
	max: number
	onChange(value: number): void
}

export function Slider({ value, min, max, onChange }: Props) {
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		onChange && onChange(parseFloat(event.currentTarget.value))
	}

	return (
		<input
			type="range"
			value={value}
			min={min}
			max={max}
			step={1}
			aria-valuemin={min}
			aria-valuemax={max}
			aria-valuenow={value}
			onChange={handleChange}
		/>
	)
}

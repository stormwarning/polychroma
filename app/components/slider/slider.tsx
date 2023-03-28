import { forwardRef } from 'react'

import * as SliderPrimitive from '@radix-ui/react-slider'

import { componentStyles } from '~/styles'

const styles = componentStyles.Slider

interface Props extends SliderPrimitive.SliderProps {
	hideRange?: boolean
}

export const Slider = forwardRef<HTMLSpanElement, Props>(
	({ hideRange, ...props }, forwardedReference) => {
		let value = props.value || props.defaultValue

		return (
			<SliderPrimitive.Slider
				{...props}
				ref={forwardedReference}
				className={styles.root}
			>
				<SliderPrimitive.Track className={styles.track}>
					<SliderPrimitive.Range
						className={styles.range}
						style={{
							background: hideRange ? 'transparent' : undefined,
						}}
					/>
				</SliderPrimitive.Track>
				{value?.map((_, index) => (
					<SliderPrimitive.Thumb
						key={index}
						className={styles.thumb}
					/>
				))}
			</SliderPrimitive.Slider>
		)
	}
)

Slider.displayName = 'Slider'

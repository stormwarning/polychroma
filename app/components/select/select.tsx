import { forwardRef } from 'react'

import * as SelectPrimitive from '@radix-ui/react-select'

import { Box } from '../box/box'
import { IconCheck } from '../icons/icon-check'
import { IconChevronDown } from '../icons/icon-chevron-down'
import { IconChevronUp } from '../icons/icon-chevron-up'
import { IconChevronUpDown } from '../icons/icon-chevron-up-down'

import * as styles from './select.css'

interface Props extends SelectPrimitive.SelectProps {}

export const Select = forwardRef<HTMLButtonElement, Props>(
	({ children, ...props }, forwardedReference) => (
		<SelectPrimitive.Root {...props}>
			<SelectPrimitive.Trigger
				ref={forwardedReference}
				className={styles.trigger}
			>
				<SelectPrimitive.Value />
				<Box as={SelectPrimitive.Icon} display="flex">
					<IconChevronUpDown />
				</Box>
			</SelectPrimitive.Trigger>
			<SelectPrimitive.Portal>
				<SelectPrimitive.Content className={styles.content}>
					<SelectPrimitive.ScrollUpButton
						className={styles.scrollButton}
					>
						<IconChevronUp />
					</SelectPrimitive.ScrollUpButton>
					<SelectPrimitive.Viewport className={styles.viewport}>
						{children}
					</SelectPrimitive.Viewport>
					<SelectPrimitive.ScrollDownButton
						className={styles.scrollButton}
					>
						<IconChevronDown />
					</SelectPrimitive.ScrollDownButton>
				</SelectPrimitive.Content>
			</SelectPrimitive.Portal>
		</SelectPrimitive.Root>
	)
)

interface SelectItemProps extends SelectPrimitive.SelectItemProps {}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
	({ children, ...props }, forwardedReference) => (
		<SelectPrimitive.Item
			{...props}
			ref={forwardedReference}
			className={styles.item}
		>
			<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
			<SelectPrimitive.ItemIndicator className={styles.indicator}>
				<IconCheck />
			</SelectPrimitive.ItemIndicator>
		</SelectPrimitive.Item>
	)
)

Select.displayName = 'Select'
SelectItem.displayName = 'SelectItem'

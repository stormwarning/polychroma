import { Box } from '../box/box'
import { Button } from '../button/button'
import { IconCopy } from '../icons/icon-copy'
import { IconLink } from '../icons/icon-link'

import { useGradientState } from './gradient-provider'

import * as styles from './gradient.css'

export function Gradient() {
	let { gradient: gradientCSS } = useGradientState()

	let copyButtonText = 'Copy'
	let shareButtonText = 'Share'

	function copyCSS() {}
	function shareURL() {}

	return (
		<Box
			as="section"
			className={styles.section}
			position="sticky"
			top={{ desktop: 0 }}
			bottom={{ desktop: 0 }}
			height={{ desktop: 'screen-h' }}
			style={{ backgroundImage: gradientCSS }}
		>
			<Box
				as="figure"
				className={styles.figure}
				display={['none', 'none', 'block']}
				width="full"
				maxWidth="lg"
			>
				<Box
					as="pre"
					className={styles.code}
					paddingX={32}
					paddingY={64}
				>
					<code>{gradientCSS}</code>
				</Box>
			</Box>

			<Box
				display="flex"
				alignItems="flex-end"
				justifyContent="flex-end"
				gap={16}
				paddingX={32}
				paddingY={64}
			>
				<Button onClick={copyCSS} icon={<IconCopy />}>
					{copyButtonText}
				</Button>
				<Button onClick={shareURL} icon={<IconLink />}>
					{shareButtonText}
				</Button>
			</Box>
		</Box>
	)
}
